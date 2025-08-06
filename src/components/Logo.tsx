import { Link } from "react-router-dom";


export default function Logo() {
  return (
    <Link to={'/'} className="h-30 w-30" >
        <img src="/img/perro.png" alt="" />
    </Link>
  )
}
