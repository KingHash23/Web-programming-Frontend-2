import { Outlet, Link} from "react-router-dom";
function LayoutComponent(){
    return (<>
    <nav>
        <h1>My Portfolio</h1>
        <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Results">AcademicResult</Link></li>
            <li><Link to="/Goals">CareerGoals</Link></li>
            <li><Link to="/Hero">Hero</Link></li>
            <li><Link to="/Gallery">MediaGallery</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Navbar">Navbar</Link></li>
            <li><Link to="/Login">Login</Link></li>
        </ul>
    </nav>
    </>);
}

export default LayoutComponent;