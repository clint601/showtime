// import { useParams } from "react-router-dom"
// import { useEffect, useState } from 'react'




const Sign =()=> {

// const params = useParams()

// const [setSign] = useState({})

// useEffect(()=> {
    
// }, [])


    return(
        <main className="main">
            
            <div className="container happy">
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


