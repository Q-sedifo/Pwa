import { ToggleTheme } from "./Toggle-theme"

export function Header() {
  return (
    <header className="w-full flex justify-between items-center gap-5 p-2 bg-background">
      <h2 className="text-2xl font-bold">App</h2>
      <ToggleTheme />
    </header>
  )
}