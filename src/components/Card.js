
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
                                    <div className="mt-3">
                                <h4 className="text-gray-900 font-bold">Show Day:</h4>
                            {props.showtimes.map((show, index) => (
                        <p key={index} className=" text-gray-700 text-sm m-1">{show.day}</p>
                    ))}
                </div>
                <div className="btn">
                <Link className="ticket-button align-item-center text-decoration-none " to='/movie'>🎟 Get Tickets</Link>
                </div>
            </div>
        </div>
            </div>
    );
    };


export default Card