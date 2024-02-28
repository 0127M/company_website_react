import { Link } from "react-router-dom";
// import testSvg from "../../assets/logo_image.svg";
// import testSvg from "../../assets/image.svg";
import logoVideo from "../../assets/sssp_log_vd.mp4";
import "./Navbar.css"





function Navbar() {
    return (
        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 border-bottom header">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    {/* <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
                    </svg>                     */}
                    {/* <img className = "logo" src={testSvg} alt="" /> */}
                    <video className="logo" src={logoVideo} autoPlay loop muted></video>
                    <span className="fs-1">Tech. Innovate. Elevate.</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="#" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link">Contact</Link></li>
                    <li className="nav-item"><Link to="#" href = "/" className="nav-link active" aria-current="page">Hire US</Link></li>
                </ul>
            </header>
        </div>
    );
}

export default Navbar;