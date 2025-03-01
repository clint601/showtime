


const Main = () => {
    return (
        <main className="main">
            
            <div className="carousel slide" 
id="myCarouse"
data-bs-wrap="true" 
data-bs-ride="carousel">

    <div className="carousel-inner">

        <div className="carousel-item active" data-bs-interval="6000">
        <img src="/capt.jpeg" className="w-100 slide-img" />
        </div>

        <div className="carousel-item "data-bs-interval="5000">
        <img src="/krav.jpeg" className="w-100 slide-img" />
        </div>

        <div className="carousel-item " data-bs-interval="6000">
            <img src="/lion.jpeg" className="w-100 slide-img" />
        </div>

    </div>

    <button className="carousel-control-prev" 
    type="button"
    data-bs-target="#myCarouse" 
    data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
    </button>

    <button className="carousel-control-next"
    type="button"
    data-bs-target="#myCarouse"
    data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
</button>

    <div className="carousel-indicators">
        <button type="button" className="active"
            data-bs-target="#myCarouse"
            data-bs-slide-to="0">
            
        </button>

        <button type="button" 
        data-bs-target="#myCarouse"
        data-bs-slide-to="1">
            
        </button>

        <button type="button"
        data-bs-target="#myCarouse"
        data-bs-slide-to="2">
        
        </button>
    </div>

</div>
            {/* <div className="container-fluid p-0">
                <div className="img-slide carousel slide" data-bs-ride="carousel" id="myCarousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src="/capt.jpeg" className="img-fluid image d-block  w-100 slide-img" alt="Movie 1" />
                            </div>
                                    <div className="carousel-item" data-bs-interval="6000">
                                        <img src="/krav.jpeg" className="img-fluid image d-block w-100 slide-img" alt="Movie 2" />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="6000">
                                        <img src="/lion.jpeg" className="img-fluid image d-block w-100 slide-img" alt="Movie 3" />
                                        </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" role="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </button>
                                <button className="carousel-control-next" type="button" role="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </div> */}
    </main>
    );
};
export default Main;
