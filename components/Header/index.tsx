import { ToggleTheme } from "./Toggle-theme"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed left-0 top-0 w-full flex justify-between items-center gap-5 p-2 z-10">
      <Link href="/"><h2 className="text-2xl font-bold">App</h2></Link>
      <ToggleTheme />
    </header>
  )
}