// import headingVideo from "../../assets/heading_video.mp4"
// import sliderVideo1 from "../../assets/slider_images/slider_one_video.mp4"   
import sliderVideo4 from "../../assets/Transforming_slider.mp4"

import "./Heading.css"



function Heading() {
    return (
        <div className="container1">
            <video src={sliderVideo4} autoPlay loop muted className="video"></video>
        </div>
    );
}

export default Heading;