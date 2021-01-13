import React from "react"
import { ICharter } from "./Charcter.types"
interface IProps {
  character: ICharter
}
const Character: React.FC<IProps> = (props: IProps) => {
  const {
    character: { name },
  } = props
  return <p>{name}</p>
}

export default Character
