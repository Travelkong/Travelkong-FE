import { NavLink } from "react-router-dom"

export default function LogoComponent(): JSX.Element {
  return (
    <NavLink to="/">
      <div className="">
        <svg></svg>
      </div>
    </NavLink>
  )
}
