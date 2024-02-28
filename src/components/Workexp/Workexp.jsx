import "./Workexp.css";

function Workexp() {
    return (
        <>

            <div className="about_heading">
                <h1 className="about_us">What Services We Provide</h1>
                <h5>Transforming Your Ideas into Reality</h5>

                <div className="col-2">
                    <div className="line"></div>
                </div>
            </div>
            <div className="container container_workexp">
                <div className="card-group">
                    <div className="card">
                        <div className="card-body ">
                            <h5 className="card-title">Web Developer</h5>
                            <p className="card-text">
                            Our web developers are highly skilled in building responsive and robust websites using cutting-edge technologies, ensuring seamless functionality and optimal user experience across all devices.
                            </p>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar w-75">Web Developer</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Graphic Designer</h5>
                            <p className="card-text">
                            Our graphic designers are passionate about creating visually stunning and impactful designs that captivate audiences, effectively communicate brand messages, and bring ideas to life with creativity and attention to detail.
                            </p>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar w-75">Graphic Designer</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Marketing</h5>
                            <p className="card-text">
                            Our marketing experts leverage their deep understanding of consumer behavior and industry trends to create strategic campaigns that brand awareness and engage target audiences.
                            </p>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar w-75">Marketing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default Workexp;
