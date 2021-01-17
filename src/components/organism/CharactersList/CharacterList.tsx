/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react"
import Character from "../../molecules/Character/Character"
import { ICharter } from "../../molecules/Character/Charcter.types"
import { ICharacters } from "./characters.types"
import { getData } from "../../../utils/getData"
import HeaderLogo from "../../../assets/rick-and-morty-logo.png"
import "./characterList.scss"

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacters>()

  useEffect(() => {
    getData("https://rickandmortyapi.com/api/character/").then((data) => {
      setCharacters(data)
      console.log(data)
    })
  }, [])
  return (
    <div className="characterList">
      <div className="characterList-header">
        <img src={HeaderLogo} alt="Heaaderlogo" />
      </div>
      {characters &&
        characters.results.map((charter: ICharter) => (
          <Character character={charter} key={charter.id} />
        ))}
    </div>
  )
}

export default CharacterList
