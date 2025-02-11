import { NavLink } from "react-router-dom"

export default function LogoComponent(): JSX.Element {
  return (
    <NavLink to="/">
      <div className="">
        <img src="/assets/img/logo.png" alt="" />
      </div>
    </NavLink>
  )
}
