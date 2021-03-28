import React from "react"
import useTheme from "../../../utils/hooks/useTheme"
import { Toggle } from "../../atoms/Toggle/Toggle.atom"
import HeaderLogo from "../../../assets/rick-and-morty-logo.png"
import HeaderLogo2 from "../../../assets/rick-and-morty-logo-2.png"
import "./header.molecule.scss"
export const Header: React.FC = () => {
  const { dark, setDark } = useTheme()
  return (
    <header className="header">
      <button
        onClick={() => {
          setDark(!dark)
        }}
        className="header-logo"
        type="button"
      >
        <img src={!dark ? HeaderLogo : HeaderLogo2} alt="Heaaderlogo" />
      </button>
      <Toggle />
    </header>
  )
}

export default Header
