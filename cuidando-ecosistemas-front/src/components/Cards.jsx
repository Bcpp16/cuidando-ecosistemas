import React from 'react'

function Cards() {
  return (
    <div className='w-full flex flex-wrap justify-between items-center gap-6'>

        <div className='w-40 h-40 rounded-3xl bg-gray-50'>
        <img className="w-20 m-4" src="./assets/icons/lavanda.png" alt="" />
        </div>
        <div className='w-40 h-40 rounded-3xl bg-gray-50'>
        <img className="w-20 m-4" src="./assets/icons/suculento.png" alt="" />

        </div>
        <div className='w-40 h-40 rounded-3xl bg-gray-50'>
        <img className="w-20 m-4" src="./assets/icons/arbol.png" alt="" />

        </div>
        <div className='w-40 h-40 rounded-3xl bg-gray-50'>
        <img className="w-20 m-4" src="./assets/icons/cactus.png" alt="" />

        </div>

    </div>
  )
}

export default Cards