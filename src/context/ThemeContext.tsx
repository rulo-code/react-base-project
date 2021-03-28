import React, { useState } from "react"
import { IThemeContext } from "./theme.types"

interface IProps {
  children: React.ReactNode
}

export const Context = React.createContext<IThemeContext>({
  dark: false,
  setDark: (b: boolean) => {
    return b
  },
})
const getPrefefColorScheme = () => {
  if (!window.matchMedia) return
  return window.matchMedia("(prefers-color-schema: dark)").matches
}

const getInitialMode = () => {
  const isReturningUser = "dark" in localStorage
  const saveMode = JSON.parse(String(localStorage.getItem("dark")))
  const userPreferDark = getPrefefColorScheme()
  if (isReturningUser) {
    // if mode was saved => dark / light
    return saveMode
  } else if (userPreferDark) {
    // if preferred color scheme is dark => dark
    return true
  } else {
    // otherwise => light
    return false
  }
}
const ThemeContext: React.FC<IProps> = ({ children }: IProps) => {
  const [isDark, setIsDark] = useState<boolean>(getInitialMode())
  const setDark = (b: boolean) => {
    setIsDark(b)
  }

  const context = {
    setDark,
    dark: isDark,
  }
  return <Context.Provider value={context}>{children}</Context.Provider>
}

export default ThemeContext
