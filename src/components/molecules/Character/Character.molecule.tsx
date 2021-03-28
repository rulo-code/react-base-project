import React from "react"
import { ICharter } from "./Charcter.types"
import AliveLogo from "../../../assets/heart1.svg"
import DeadLogo from "../../../assets/heart2.svg"
import useTheme from "../../../utils/hooks/useTheme"
import "./character.molecule.scss"

interface IProps {
  character: ICharter
}
const Character: React.FC<IProps> = (props: IProps) => {
  const { dark } = useTheme()
  const { character } = props
  return (
    <div className={!dark ? "character" : "character dark"}>
      <div className="photocontainer">
        <img src={character.image} alt="alive" />
      </div>
      <div className="info">
        <h3 className="info-title">{character.name}</h3>
        <div className="info-statusAndSpecie">
          {character.status && "Alive" ? (
            <img src={AliveLogo} alt="alive" />
          ) : (
            <img src={DeadLogo} alt="dead" />
          )}
          {character.status} / {character.species}
        </div>
        <div className="info-lastKnowLocation">
          <h4 className="info-lastKnowLocation-title">Last Know lcoation</h4>
          <p className="info-lastKnowLocation-value">{character.location.name}</p>
        </div>
        <div className="info-episodes">
          <h4>Episodes</h4>
          {character.episode && character.episode.length}
        </div>
      </div>
    </div>
  )
}

export default Character
