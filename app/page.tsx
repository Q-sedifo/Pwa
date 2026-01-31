import InstallAppBtn from "@/components/buttons/Install-app-btn"
import UninstallAppBtn from "@/components/buttons/Uninstall-app-btn"

export default function Home() {
  return (
    <div className="w-full flex h-full justify-center items-center flex-col gap-4">
      Main page
      <InstallAppBtn />
      <UninstallAppBtn />
    </div>
  )
}
