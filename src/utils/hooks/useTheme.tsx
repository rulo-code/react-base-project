import { useContext } from "react"
import { Context } from "../../context/ThemeContext"
import { IThemeContext } from "../../context/theme.types"

const useCheckout: () => IThemeContext = () => useContext(Context)

export default useCheckout
