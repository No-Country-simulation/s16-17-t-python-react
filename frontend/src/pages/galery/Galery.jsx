import React from 'react'
import datos from './galery.json'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Galery = () => {
    return (

        <section className='grid grid-cols-1 gap-2 w-full  md:grid-cols-2 md:gap-[1rem] md:justify-center p-3 md:grid-rows-2 md:w-full md:max-w-[658px] md:mx-auto'>

            {
                datos.map(e => (


                    <div className="w-[19rem] mx-auto h-full hover:scale-105  transition-all .5s ease-in-out border rounded-lg shadow-lg p-6 flex flex-col gap-1" key={e.id}>
                        <img className="h-auto w-[90%]" src={e?.imagen || "Cargando.."}></img>
                        <h3 className=" text-[1rem]">{e.title}</h3>
                        <div className='flex flex-row justify-between gap-5' >

                            <div className="text-xs flex items-center gap-2">
                                <LocationOnIcon />
                                {e.ubicacion}
                            </div>
                            <div className="text-xs text-right">
                                <FavoriteBorderIcon className='bg-red cursor-pointer hover:text-[#f13a3a]' />
                                {e.likes}
                            </div>
                        </div>

                    </div>

                ))
            }
            
        </section>

    )
}
export default Galery


