import { Link } from "react-router-dom";

// const Movie =(m)=> {
    
//     return(
//         <main className="main" id="main">

//             <section className="section" id="Section1">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-6 mt-5">
//                             <figure className="figure">
//                                 <img src={m.imgUrl} alt="" className="img-fluid image w-100 figure-img" />
//                             </figure>
//                         </div>
//                         <div className="col-md-6">
//                             <h2 className=" sp-text text-center mt-5">{m.title}</h2>
//                             <p className="img-text text-center">Rated: {m.rating}</p>
//                             <p className="img-text text-center">{m.description}</p>
//                             <p className="img-text text-center">{m.duration}</p>
//                             <p className="img-text text-center">Cast: {m.actors}</p>
//                             <p className="img-text text-center">Genre: {m.genre}</p>
//                         </div>
//                     </div>
//                 </div>
//         </section>
//     </main>
//     )
// }

// export default Movie
// const Movie = (m) => {
//     return (
//         <main className="main" id="main">
//             <section className="section" id="Section1">
//                 <div className="container">
//                     <div className="row d-flex align-items-center">
//                         <div className="col-md-5">
//                             <figure className="figure">
//                                 <img 
//                                     src={m.imgUrl} 
//                                     alt="" 
//                                     className="img-fluid w-100 figure-img"
//                                 />
//                             </figure>
//                         </div>
//                         <div className="col-md-6 me-3">
//                             <h2 className="sp-text text-start mt-3">{m.title}</h2>
//                             <p className="img-text text-center">Rated: {m.rating}</p>
//                             <p className="img-text text-center">{m.description}</p>
//                             <p className="img-text text-center">{m.duration}</p>
//                             <p className="img-text text-center">Cast: {m.actors}</p>
//                             <p className="img-text text-center">Genre: {m.genre}</p>
//                             {m.showtimes.map((show, index) => (
//                         <p key={index} className="text-gray-700 text-sm">{show.day}: {show.time}</p>
//                     ))}
//                         </div>
                        
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default Movie;


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
                            <h2 className="sp-text text-start mt-3">{m.title}</h2>
                                <p className="img-text text-start">Rated: {m.rating}</p>
                                <p className="img-text text-start">{m.description}</p>
                                <p className="img-text text-start">⏳ Duration: {m.duration}</p>
                                <p className="img-text text-start">🎭 Cast: {m.actors}</p>
                                <p className="img-text text-start">🎬 Genre: {m.genre}</p>
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
