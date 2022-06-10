import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeHelper } from '../Helpers/ThemeHelper'

export const MainRouter = ({children}) => {
  const {theme} = useSelector((state)=>state.theme);
  const {font} = useSelector((state)=>state.font);
  ThemeHelper(theme, font)
  return (
    <main className={`m-3 ${theme}`}>
      <BrowserRouter>
          {children}
      </BrowserRouter>
    </main>
  )
}
