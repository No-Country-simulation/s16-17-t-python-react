import React from 'react'
import datos from './galery.json'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';





export const AlbumComponent = () => {
    return (

        <section className='grid grid-cols-1 gap-2 w-full  md:grid-cols-2
        md:gap-[1rem] md:justify-center md:p-3 md:grid-rows-2 md:w-full 
        md:max-w-[658px] md:mx-auto lg:max-w-[1042px]'>

            {
                datos.map(e => (
                    <div className="w-[19rem]  lg:w-[30rem] mx-auto h-full hover:scale-105  transition-all .5s ease-in-out border rounded-lg shadow-lg  lg:p-6 md:p-3 p-2  flex flex-col gap-3" key={e.id}>
                        <div className='grid grid-cols-2 grid-rows-2 gap-[.5rem] justify-items-center' >
                            <img className="h-auto w-[68%] md:w-[80%] lg:w-[100%] rounded-lg" src={e?.imagen || "Cargando.."}></img>
                            <img className="h-auto w-[68%] md:w-[80%] lg:w-[100%] rounded-lg" src={e?.imagen1} alt="" />
                            <img className="h-auto w-[68%] md:w-[80%] lg:w-[100%] rounded-lg" src={e?.imagen3} alt="" />
                            <img className="h-auto w-[68%] md:w-[80%] lg:w-[100%] rounded-lg" src={e?.imagen2} alt="" />
                        </div>
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



