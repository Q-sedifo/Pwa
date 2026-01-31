"use client"

import { ThemeProvider } from "./theme-provider"

interface IProps {
  children: React.ReactNode
}

export function Providers({ children }: IProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      { children }
    </ThemeProvider>
  )
}