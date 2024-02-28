import "./About.css";
import about_details from "../../assets/slider_images/about_details.jpg"
// import add from "../../assets/slider_images/ads.png"
// import computer from "../../assets/slider_images/computer.png"
// import setting from "../../assets/slider_images/settings.png"

function About() {
    return (
        <div className="container">
            <div className="about_heading">
            <div className="container about_heading">
                <h1 className="about_us">About Us</h1>
                <h5>Transform Your Ideas Today with SSSP infotech</h5>
            </div>

            <div className="container col-2">
                <div className="line"> </div>
            </div>
            </div>
            <div className="section">
                <div className="about_details">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="details">
                                <h2>Welcome to Our Website</h2>
                                <div className="line"> </div>
                                <p>we are passionate about harnessing the power of technology to help businesses thrive in the digital world. Whether you are looking to establish your online presence, enhance your existing applications, improve your website’s visibility, or create custom software solutions, we have got you covered. Our team of expert developers, designers, and SEO specialists are here to turn your ideas into reality and drive your success.</p>
                                <div className="button_div">
                                    <button type="button" className="btn btn-primary">Contact Us</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image-with-shadow">
                                <img className="laptop_img" src={about_details} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default About;
