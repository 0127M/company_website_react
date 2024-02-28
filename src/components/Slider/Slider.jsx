import sliderVideo1 from "../../assets/slider_images/slider_one_video.mp4"
import sliderVideo2 from "../../assets/slider_images/slider_second_video.mp4"
import sliderVideo3 from "../../assets/slider_images/slider_third_video.mp4"
import "./Slider.css"
// import image from "../../assets/slider_images/slider_third_image.png"



function Slider() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <video src={sliderVideo1} autoPlay loop muted className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <video src={sliderVideo2} autoPlay loop muted  className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <video src={sliderVideo3}  autoPlay loop muted className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Slider;