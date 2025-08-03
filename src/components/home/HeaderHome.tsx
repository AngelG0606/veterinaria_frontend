import Logo from "../Logo";
import Nav from "./Nav";


export default function HeaderHome() {
  return (
    <header className="bg-green-300 shadow h-30 w-full flex items-center justify-between px-20">
        
        <Logo />

        <Nav />
    </header>
  )
}
