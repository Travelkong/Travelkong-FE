import { useNavigate } from "react-router-dom"

function NavbarComponent(): JSX.Element {
  const navigate = useNavigate()

  return (
    <>
      <nav className="flex justify-between">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blogs</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </nav>
    </>
  )
}

export default NavbarComponent