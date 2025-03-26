import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Outlet />
      <div>这是Layout</div>
    </>
  )
}

export default Layout
