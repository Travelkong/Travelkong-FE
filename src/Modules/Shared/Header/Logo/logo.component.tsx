import { NavLink } from "react-router-dom"

export default function LogoComponent(): JSX.Element {
  return (
    <NavLink to="/">
      <div className="flex items-center font-serif font-bold"> 
        <img src="/assets/img/logo.png" alt="" />
        <p className="text-4xl px-2 font-DM">Travelkong</p>
      </div>
    </NavLink>
  )
}
