import LogoComponent from "./Logo/logo.component";
import { NavbarComponent } from "./Navbar";

function HeaderComponent(): JSX.Element {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <LogoComponent />

        <NavbarComponent />
    </header>
  )
}

export default HeaderComponent
