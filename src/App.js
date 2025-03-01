import { Routes, Route} from 'react-router-dom'


import Header from './components/Header'
import Main from './components/Main'
import Sign from './components/Sign'

// const slides = [
//     {url:}
// ]

const App =()=> {

    return (
        <>
        <Header />
        <Main />
        {/* <ImagesSlider slides={slides}/> */}
        <Routes>
            <Route path='/sign' element={ <Sign />} />
        </Routes>
        </>
    )
}

export default App