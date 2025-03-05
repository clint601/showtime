
import { Link } from 'react-router-dom'

const Card = ( props ) => {
    return (
            <div className="col">
                <div className=" card">
            <img src={props.imgUrl}  className="card-image " />
            <div className="">
                    <h6 className="text-xl font-bold text-center">{props.title}</h6>
                </div>
                <div className ="card-footer">
                            <p className="text-gray-700 text-sm">Genre: {props.genre}</p>
                                    {/* <p className="text-gray-500 text-sm mt-2">{props.description}</p>
                                        <p className="text-gray-900 font-semibold mt-2">Rating: {props.rating}</p>
                                        <p className="text-gray-900 font-semibold">Duration: {props.duration}</p>
                                        <p className="text-gray-800 text-sm mt-2">Actors: {props.actors.join(", ")}</p> */}
                                    <div className="mt-3">
                                <h4 className="text-gray-900 font-bold">Showtimes:</h4>
                            {props.showtimes.map((show, index) => (
                        <p key={index} className="text-gray-700 text-sm">{show.day}: {show.time}</p>
                    ))}
                </div>
                <div className="btn">
                <Link className="ticket-button align-item-center text-decoration-none " to='/movie'>🎟 Get Tickets</Link>
                {/* <button class="ticket-button">🎟 Get Tickets</button> */}
                </div>
            </div>
        </div>
            </div>
    );
    };


export default Card