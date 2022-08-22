import {ImagesCarousel} from "./ImagesCarousel"
import {SearchImages} from "./SearchImages"
import {CardImage} from "./CardImage"
import {useEffect, useState} from 'react'
import {getImages} from '../../service/api.js'
import { Loading } from "../layout/loading/Loading"
//redux primera forma
// import {connect} from 'react-redux' // UTILIZAR EN CONNCET
// importando la accion
// import {setImages} from '../../redux/actions/index.js' al utilizar connect

// redux segunea forma
// useSelector consulta data del store global
// useDispatch hace el disparo de la accion 
import {useSelector, useDispatch} from 'react-redux'
import {setImages as setImageActions} from '../../redux/actions/index.js'


export function Gallery () {
    // const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    
    const dispatch = useDispatch()
    const images = useSelector(state => state.images)

     const searchImage = async () => {
        setLoading(true)
        const result = await getImages(search)
        dispatch(setImageActions(result))

        // setImages(result)
        setLoading(false)
        setSearch('')
        console.log(result)
      
     }

    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    useEffect (()=>{
        getImages().then(images => {
            console.log(images)
            // setImages(images)
            dispatch(setImageActions(images))
            setLoading(false)
        }).catch(err =>{
            console.log(err)
        })
    },[])

    return (
        <div className="bg-slate-800 text-white">
        <h1 className="text-2xl font-bold">MI GALERIA</h1>
        <div className="flex flex-wrap justify-center mt-10">
        <ImagesCarousel />
        </div>
        <div className="flex flex-wrap justify-center mt-10">
        <SearchImages searchImage={searchImage} handleSearch={handleSearch} value={search}/>
        </div>
        <div className="grid lg:grid-cols-4 mt-10">
          {loading ? <Loading/>
          : images.map(image => <CardImage key ={image.id} image={image} />)}
        </div>
      </div>
    )
}
/* // mapeando el estado para ingresarlo como props al componente 
const mapStateToProps = (state) => {
    return {
        images: state.images
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setImages: (value) => dispatch(setImages(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery) */