import React, { useEffect } from "react"
import { Header } from "./components/molecules/Header/Header.molecule"
import useTheme from "./utils/hooks/useTheme"
import CharactersList from "./components/organism/CharactersList/CharacterList.organism"
import "./app.scss"

const App: React.FC = () => {
  const { dark } = useTheme()
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark))
  }, [dark])
  return (
    <div className={dark ? "app darkMode" : "app lightMode"}>
      <Header />
      <CharactersList />
    </div>
  )
}

export default App
