// import LogoComponent from "./Logo/logo.component";
// import { NavbarComponent } from "./Navbar";
import NavbarComponent2 from "./Navbar/navbar.component";

function HeaderComponent(): JSX.Element {
  return (
    <header className="">
        <div className="">
            {/* <LogoComponent /> */}
            
            <NavbarComponent2 />
        </div>
    </header>
  )
}

export default HeaderComponent