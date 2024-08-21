import { Outlet } from "react-router-dom"
import { NavBar } from "../components/NavBar"

const RootLayout = ({cartSize}: any) => {
  return (
    <div>
        <NavBar cartSize={cartSize} />
     <main>
        <Outlet />
     </main>
        
    </div>
  )
}

export default RootLayout