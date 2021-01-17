import React from "react"
import { ICharter } from "./Charcter.types"
import AliveLogo from "../../../assets/heart1.svg"
import DeadLogo from "../../../assets/heart2.svg"

import "./character.scss"
interface IProps {
  character: ICharter
}
const Character: React.FC<IProps> = (props: IProps) => {
  const { character } = props
  return (
    <div className="character">
      <div className="photocontainer">
        <img src={character.image} alt="alive" />
      </div>
      <div className="info">
        <h3>{character.name}</h3>
        <div className="status&specie">
          {character.status && "Alive" ? (
            <img src={AliveLogo} alt="alive" />
          ) : (
            <img src={DeadLogo} alt="dead" />
          )}
          {character.status} / {character.species}
        </div>
        <div className="lastKnowLocation">
          <h4>Last Know lcoation</h4>
          {character.location.name}
        </div>
        <div className="episodes">
          <h4>Episodes</h4>
          {character.episode && character.episode.length}
        </div>
      </div>
    </div>
  )
}

export default Character
