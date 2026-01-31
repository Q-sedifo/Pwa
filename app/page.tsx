import InstallAppBtn from "@/components/buttons/Install-app-btn"
import UninstallAppBtn from "@/components/buttons/Uninstall-app-btn"
import Link from "next/link"

export default function Home() {
  return (
    <div className="w-full flex h-full justify-center items-center flex-col gap-4">
      <Link href="/image">Image</Link>
      <InstallAppBtn />
      <UninstallAppBtn />
    </div>
  )
}
