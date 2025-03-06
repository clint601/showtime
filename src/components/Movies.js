import Movie from "./Movie";




const Movies =(props)=> {
    const movieInfo = props.data.map((arr, index) => {
        return (
            <Movie 
            key={index}
            title={arr.title}
            imgUrl={arr.imgUrl}
            description={arr.description}
            genre={arr.genre}
            rating={arr.rating}
            duration={arr.duration}
            actors={arr.actors}
            showtimes={arr.showtimes}
            />
        )
    })

    return (
        <main className="main">
        <div className="container">
        <div className="row">
            <section className="section">
        { movieInfo }
            </section>
    </div>
</div>
    </main>
    );
};

export default Movies;