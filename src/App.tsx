import React, { useEffect } from "react"
import { Toggle } from "./components/toggle/Toggle"
import useTheme from "./utils/hooks/useTheme"
import "./app.scss"

const App: React.FC = () => {
  const { dark } = useTheme()
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark))
  }, [dark])
  return (
    <div className={dark ? "app darkMode" : "app lightMode"}>
      <Toggle />
    </div>
  )
}

export default App
