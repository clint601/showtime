import { Link } from "react-router-dom";


const Movie = (m) => {

    const listItems = m.showtimes.map((showtime, index)=> {
        return (
            <li className=" day-text text-light" key={index}>
                {showtime.day}
                {showtime.times.map((time, i)=> (
                    <Link key={i} className="time-link btn btn-button btn-secondary text-light m-1 ">
                        {time}
                    </Link>
                ))} 
            </li>
        );
    });
    return (
        <main className="main" id="main">
            <section className="section" id="Section1">
                <div className="container">
                    <div className="row d-flex align-items-start">
                        <div className="col-md-5">
                            <figure className="figure">
                                <img 
                                    src={m.imgUrl} 
                                    alt="" 
                                    className="img-fluid w-100 figure-img"
                                />
                            </figure>
                        </div>
                        <div className="col-md-6 me-3">
                            <h2 className="sp-text text-start mt-3 text-light">{m.title}</h2>
                                <p className="img-text text-start text-light">Rated: {m.rating}</p>
                                <p className="img-text text-start text-light">{m.description}</p>
                                <p className="img-text text-start text-light">⏳ Duration: {m.duration}</p>
                                <p className="img-text text-start text-light">🎭 Cast: {m.actors}</p>
                                <p className="img-text text-start text-light">🎬 Genre: {m.genre}</p>
                                <ul className="list-unstyled">
                                    { listItems}
                                </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Movie;
