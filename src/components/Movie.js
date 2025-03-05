

const Movie =(props)=> {
    
    return(
        <main className="main" id="main">

            <section className="section" id="Section1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <figure className="figure">
                                <img src="/image/hope.jpeg"alt="an image of football player taking down opposing team" className="img-fluid image w-100 figure-img" />
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <h2 className=" sp-text text-center mt-5">{props.title}</h2>
                            <p className="img-text text-center">{props.description}</p>
                            <p className="img-text text-center"></p>
                        </div>
                    </div>
                </div>
        </section>
    </main>
    )
}

export default Movie