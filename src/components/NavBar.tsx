import logo from "../assets/logo.svg";

export function Navbar() {



  return (
    <div>
      <nav className="p-4 border-b ">
        <div className="container mx-auto flex items-center">
          <div >
            <img className="h-8" src={logo} alt="" />
          </div>
          
        </div>
      </nav>
    </div>
  )
}