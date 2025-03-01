import Card from "./Card";

const Main = (props) => {
    const cardComponents = props.data.map((item, index) => {
        return (
            <Card 
            key={index}
            title={item.title}
            imgUrl={item.imgUrl}
            description={item.description}
            genre={item.genre}
            rating={item.rating}
            duration={item.duration}
            actors={item.actors}
            showtimes={item.showtimes}
            />
        )
    })

    return (
        <main className="main">
            <div className="carousel slide" 
id="myCarouse"
data-bs-wrap="true" 
data-bs-ride="carousel">

    <div className="carousel-inner">

        <div className="carousel-item active" data-bs-interval="6000">
        <img src="/mrw.jpeg" className="w-100 slide-img" />
        </div>

        <div className="carousel-item "data-bs-interval="5000">
        <img src="/21.jpeg" className="w-100 slide-img" />
        </div>

        <div className="carousel-item " data-bs-interval="6000">
            <img src="/grown.jpeg" className="w-100 slide-img" />
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
<div className="container">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        { cardComponents}
    </div>
</div>
    </main>
    );
};
export default Main;
