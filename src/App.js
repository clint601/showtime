import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'


import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Home from './components/Home'
import Movies from './components/Movies'
import Error from './components/Error'
// import Movies from './components/Movies'
import Sign from './components/Sign'

import data from './data'



const App =()=> {
    
    const [myData, setMyData] = useState([])
    const [ userData, setUserData ] = useState({
        user: 'guest',
        email: '',
        password: ''
    })

    useEffect(()=> {
        setMyData(data)
    }, [])

    return (
        <>
        <Header />
        {/* <Movies /> */}
        <Routes>
            <Route path='/' element={ <Main data={myData} />} />
            <Route path='/sign' element={ <Sign userData={userData}/>} />
            <Route path='/home' element={ <Home data={myData} />} />
            <Route path='/movie' element={ <Movies data={myData} />} />
            <Route path='*' element={<Error />} />
        </Routes>

        {/* <Main data={myData} /> */}
        <Footer />
        {/* <ImagesSlider slides={slides}/> */}
        </>
    )
}

export default App