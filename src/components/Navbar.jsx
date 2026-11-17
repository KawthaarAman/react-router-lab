import { Link } from "react-router"

function Navbar() {
    return (
        <nav>
            <Link to='/'> Homepage |</Link>
            <Link to='/products'> Products |</Link>
            <Link to='/new-product'> New Products </Link>

        </nav>
    )
}

export default Navbar