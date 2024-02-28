import "./ServicesComp.css"
import add from "../../assets/slider_images/ads.png"
import computer from "../../assets/slider_images/computer.png"
import setting from "../../assets/slider_images/settings.png"
import sliderVideo5 from "../../assets/working_progress.mp4"

// import computer_design from "../../assets/slider_images/computer_design.jpg"
// import computer_design from "../../assets/slider_images/key_board.jpg"


function ServicesComp() {
    return (
        <>
            <div className="container_service">
                <div className="container">
                    <div className="about_heading">
                        <h1 className="about_us">What Services We Provide</h1>
                        <h5>Transforming Your Ideas into Reality</h5>

                        <div className="col-2">
                            <div className="line"></div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 g-4 card_section">
                        <div className="col">
                            <div className="card">
                                <img src={computer} className="card_img" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">UI/UX Design</h5>
                                    <p className="card-text">Our UX designers take a user-centric approach, prioritizing the needs, goals, and behaviors of your target audience.</p>
                                    <div className="svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={add} className="card_img" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Digital Marketing</h5>
                                    <p className="card-text">Our team of digital marketers has extensive experience across various industries, ensuring your unique requirements.</p>
                                    <div className="svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={setting} className="card_img" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Web Development</h5>
                                    <p className="card-text">Our web development services encompass a wide range of technologies, including HTML5, CSS3, JavaScript, and more.</p>
                                    <div className="svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container1">
                    <video src={sliderVideo5} autoPlay loop muted className="video"></video>
                </div>

            </div>
        </>
    );
}

export default ServicesComp;