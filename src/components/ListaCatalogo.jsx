import React, { useContext } from 'react'
import { DataContext } from './Catalogo'
import './ListaCatalogo.css'

function ProductoItem() {

    const { data, setData } = useContext(DataContext)

    return (
        <div className='container'>
            <h2 className='titulo'>Peliculas</h2>
            <div className='row'>

                {data.map(producto => (
                    <div className='card' key={producto.imdbID}>
                        <div className="item">
                            <img src={producto.Poster} />
                            <p>
                                <strong> Titulo:</strong><br /> {producto.Title} <br />
                                <strong> Año: {producto.Year} </strong>
                            </p>

                            <div className='botones'>
                                <button className='boton-ver'>
                                    Ver
                                </button>
                                <button className='boton-fav'>
                                    Favoritos
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductoItem