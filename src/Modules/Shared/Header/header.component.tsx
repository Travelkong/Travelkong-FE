import LogoComponent from "./Logo/logo.component";
import { NavbarComponent } from "./Navbar";

function HeaderComponent(): JSX.Element {
  return (
    <header className="">
        <div className="">
            <LogoComponent />
            
            <NavbarComponent />
        </div>
    </header>
  )
}
