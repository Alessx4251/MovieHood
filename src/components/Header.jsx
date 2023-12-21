import React from 'react'

function Header() {
    return (
        <div className='md:flex bg-white rounded-xl shadow-2xl text-slate-700 font-medium justify-between space-x-5 p-5'>
            <h1>
                MovieHOOD
            </h1>
            <p className='flex-1 w-24'>darkmode</p>
            <button className='flex-1 w-24 h-12 bg-lime-400'>
                Mis Favoritas
            </button>
        </div>
    )
}

export default Header