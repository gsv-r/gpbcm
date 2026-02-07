import NavBar from "./navbar"
import TitleBar from "./titlebar"
import BottomBar from "./bottombar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-neutral-900">
      <TitleBar />
      <NavBar />
      <div className="flex-1 relative z-10 px-4">{children}</div>
      <BottomBar />
    </div>
  )
}