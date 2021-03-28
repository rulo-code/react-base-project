/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react"
import Character from "../../molecules/Character/Character"
import useTheme from "../../../utils/hooks/useTheme"
import config from "../../../utils/config"
import Skeleton from "../../atoms/Skeleton/Skeleton"
import { ICharacters } from "./characters.types"
import { ICharter } from "../../molecules/Character/Charcter.types"
import { getData } from "../../../utils/getData"
import HeaderLogo from "../../../assets/rick-and-morty-logo.png"
import HeaderLogo2 from "../../../assets/rick-and-morty-logo-2.png"
import "./characterList.scss"

const CharacterList: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>()

  const [characters, setCharacters] = useState<ICharacters>({
    indefo: null,
    results: [],
  })
  const [searchField, setSearchField] = useState<string>("")

  const filteredCharacters = characters?.results?.filter((charter: ICharter) =>
    charter.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()),
  )
  const handleSearchFieldChange = (event: any) => {
    setSearchField(event.target.value)
  }
  const { dark } = useTheme()

  useEffect(() => {
    ;(async function () {
      setLoading(true)
      setError(null)
      try {
        const data = await getData(config.API_URL)
        setLoading(false)
        setCharacters(data)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    })()
  }, [])

  return (
    <div className="characterList">
      {/* TODO: descomponer */}
      <div className="characterList-header">
        <img src={!dark ? HeaderLogo : HeaderLogo2} alt="Heaaderlogo" />
      </div>
      {/* TODO: descomponer */}
      <input
        onChange={handleSearchFieldChange}
        value={searchField}
        type="search"
        placeholder="Buscar personaje"
      />
      {/* TODO: descomponer */}
      {/* TODO: useMemo in filter results */}

      <div className="characterList-container">
        {loading && !error
          ? new Array(10).fill(1).map((_, i) => {
              return <Skeleton key={i} />
            })
          : filteredCharacters?.map((charter: ICharter) => (
              <Character character={charter} key={charter.id} />
            ))}
      </div>
      {error && <p>Error al obtener datos: {error}</p>}
    </div>
  )
}

export default CharacterList
