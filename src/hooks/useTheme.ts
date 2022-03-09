import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContex";

export const useTheme = () => useContext(ThemeContext);