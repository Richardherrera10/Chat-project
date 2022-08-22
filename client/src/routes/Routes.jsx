import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomeContainer from '../components/container/HomeContainer'
import GalleryContainer from '../components/container/GalleryContainer'
import NotFound from '../components/layout/notfound/NotFound'
class RoutesApp extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <>
                <Routes>
                    <Route path='/' element={<HomeContainer/>}/>
                    <Route path='/gallery' element={<GalleryContainer/>}/>
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='/login' />
                </Routes>

            </>
        )
    }
}

export default RoutesApp