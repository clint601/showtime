




const Sign =()=> {


    return(
        <main className="main">
            
            <div className="container happy mt-5 mb-5">
                <h2 className="sign-text text-capitalize">sign in</h2>
                <form action="#" method="POST">
                    <input type="email" placeholder="Email" required></input>
                    <input type="password" placeholder="Password" required></input>
                    <button  className="sign-in" type="submit">Sign In</button>
                </form>
            </div>
        </main>
    )
}


export default Sign


