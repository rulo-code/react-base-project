import React, { useEffect } from "react"
import { Toggle } from "./components/atoms/Toggle/Toggle"
import useTheme from "./utils/hooks/useTheme"
import CharactersList from "./components/organism/CharactersList/CharacterList"
import "./styles/app.scss"

const App: React.FC = () => {
  const { dark } = useTheme()
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark))
  }, [dark])
  return (
    <div className={dark ? "app darkMode" : "app lightMode"}>
      <Toggle />
      <CharactersList />
    </div>
  )
}

export default App
