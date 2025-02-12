import { NavLink } from "react-router-dom"

export default function LogoComponent(): JSX.Element {
  return (
    <NavLink to="/">
      <img src="/assets/img/logo.png" alt="" />
    </NavLink>
  )
}
