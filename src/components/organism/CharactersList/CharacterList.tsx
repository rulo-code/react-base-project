/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react"
import Character from "../../molecules/Character/Character"
import useTheme from "../../../utils/hooks/useTheme"

import { ICharter } from "../../molecules/Character/Charcter.types"
import { ICharacters } from "./characters.types"
import { getData } from "../../../utils/getData"
import HeaderLogo from "../../../assets/rick-and-morty-logo.png"
import HeaderLogo2 from "../../../assets/rick-and-morty-logo-2.png"
import "./characterList.scss"

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacters>()
  const { dark } = useTheme()

  useEffect(() => {
    getData("https://rickandmortyapi.com/api/character/").then((data) => {
      setCharacters(data)
      console.log(data)
    })
  }, [])
  return (
    <div className="characterList">
      <div className="characterList-header">
        <img src={!dark ? HeaderLogo : HeaderLogo2} alt="Heaaderlogo" />
      </div>

      <div className="characterList-container">
        {characters &&
          characters.results.map((charter: ICharter) => (
            <Character character={charter} key={charter.id} />
          ))}
      </div>
    </div>
  )
}

export default CharacterList
