
const Card = ( props ) => {
    return (
            <div className="col">
                <div className=" card">
            <img src={props.imgUrl}  className="card-image" />
            <div className="">
                    <h2 className="text-xl font-bold">{props.title}</h2>
                </div>
                <div className ="card-footer">
                            <p className="text-gray-700 text-sm">{props.genre}</p>
                                    <p className="text-gray-500 text-sm mt-2">{props.description}</p>
                                        <p className="text-gray-900 font-semibold mt-2">Rating: {props.rating}</p>
                                        <p className="text-gray-900 font-semibold">Duration: {props.duration}</p>
                                        <p className="text-gray-800 text-sm mt-2">Actors: {props.actors.join(", ")}</p>
                                    <div className="mt-3">
                                <h1 className="text-gray-900 font-bold">Showtimes:</h1>
                            {props.showtimes.map((show, index) => (
                        <p key={index} className="text-gray-700 text-sm">{show.day}: {show.time}</p>
                    ))}
                </div>
            </div>
        </div>
            </div>
    );
    };


export default Card