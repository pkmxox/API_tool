import Sidebar from "../layouts/Sidebar"
import MainPane from "../layouts/MainPane"
import RightSideBar from "../layouts/RightSideBar"

function AppShell() {
  return (

    <div className="flex h-screen bg-bg-primary text-text-primary overflow-hidden">
        <Sidebar /> 
        <MainPane />
        <RightSideBar />
    </div>

  )
}
export default AppShell
        