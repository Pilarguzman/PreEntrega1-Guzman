import Brand from "./brand"
import CartContainer from "./CartContainer"
import Category from "./Category"
import MenuButton from "./MenuButton"


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Brand />
        <MenuButton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
            <Category isActive={true} name="Talleres"/>
          </li>
  
          <li className="nav-item">
            <Category isActive={false} name="Nosotras"/>
          </li>
  
          <li className="nav-item">
            <Category isActive={false} name="Contacto"/>
          </li>
         
        </ul>
        
      </div>
      <CartContainer />
      </div>
      </nav> 
    )
}

export default Navbar;