// const Card = (props)=> {
//     return(
//         <div className="col">
//             <div className="card movie-card">
//                 <img src={props.imgUrl}alt="" className="img-fluid image card-img h-75" />
//                 <h2 className="card-title text-center">{props.title}</h2>
//             </div>
//             <div className="card-body">
//                 <p className="card-text">{props.description}</p>
//                 <p className="card-text">{props.genre}</p>
//                 <p className="card-text">{props.rating}</p>
//                 <p className="card-text">{props.actors}</p>
//                 <p className="card-text">{props.duration}</p>
//             </div>
//             <h2 className="show-text text-captalize">showtime</h2>
//             <ul>
                
//                         <li>
//                             {props.showtime} at {props.showtime}
//                         </li>
//             </ul>
//         </div>
//     )
// }

const Card = ( props ) => {
    return (
      <div className=" card">
        <img src={props.imgUrl}  className="w-full h-48 object-cover" />
        <div className="p-4">
        <h2 className="text-xl font-bold">{props.title}</h2>
        <p className="text-gray-700 text-sm">{props.genre}</p>
          <p className="text-gray-500 text-sm mt-2">{props.description}</p>
          <p className="text-gray-900 font-semibold mt-2">Rating: {props.rating}</p>
          <p className="text-gray-900 font-semibold">Duration: {props.duration}</p>
          <p className="text-gray-800 text-sm mt-2">Actors: {props.actors.join(", ")}</p>
          <div className="mt-3">
            <h3 className="text-gray-900 font-bold">Showtimes:</h3>
            {props.showtimes.map((show, index) => (
              <p key={index} className="text-gray-700 text-sm">{show.day}: {show.time}</p>
            ))}
          </div>
        </div>
      </div>
    );
  };


export default Card