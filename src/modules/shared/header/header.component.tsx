import LogoComponent from "./logo/logo.component";
import { NavbarComponent } from "./navbar";

function HeaderComponent(): JSX.Element {
  return (
    <header className="flex items-center w-full h-20 px-4 shrink-0 md:px-6">
        <LogoComponent />

        <NavbarComponent />
    </header>
  )
}

export default HeaderComponent
