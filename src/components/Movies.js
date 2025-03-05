import Movie from "./Movie";




const Movies =()=> {
    const movieInfo = props.data.map((item, index) => {
        return (
            <Movie 
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
        <div className="container">
        <div className="row">
        { movieInfo }
    </div>
</div>
    </main>
    );
};

export default Movies;