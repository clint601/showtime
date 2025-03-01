import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'


import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Sign from './components/Sign'

import data from './data'



const App =()=> {
    
    const [myData, setMyData] = useState([])

    useEffect(()=> {
        setMyData(data)
    }, [])

    return (
        <>
        <Header />
        <Main data={myData} />
        <Footer />
        {/* <ImagesSlider slides={slides}/> */}
        <Routes>
            <Route path='/sign' element={ <Sign />} />
        </Routes>
        </>
    )
}

export default App