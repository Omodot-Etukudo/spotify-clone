import { PlayIcon} from "@heroicons/react/solid"
import Image from 'next/image'
import { BASE_URL, BASE_URL2 } from "../next.config"
function Mediacard({picture, title, artist,year}) {
    
    return (
        <div className="group">
            <div className="lg:absolute cursor-pointer w-32 lg:w-48 lg:bg-card-bg lg:shadow-xl bg-opacity-50 lg:px-4 pt-4 pb-5 flex flex-col rounded lg:group-hover:bg-card-hover transition-colors duration-500">
                <div className="-z-10 lg:z-auto"><Image alt={title} placeholder="blur" blurDataURL loading="lazy" className="lg:rounded lg:flex lg:shadow-2xl lg:drop-shadow-2xl" width={220} height={220}  src={`${BASE_URL}${picture}` || `${BASE_URL2}${picture}`} /></div>
                <div className="title-text">
                    <h3 className="text-sm  lg:text-base mt-2 lg:mt-4 font-semibold text-white lg:text-left text-center truncate">{title}</h3>
                </div>
               
                <div className="flex lg:text-left text-center"><h3 className=" text-xs mt-1 truncate font-medium lg:text-left lg:mx-0 mx-auto">{artist}</h3><span className="font-bold mx-1 hidden lg:block">&#183;</span><h3 className=" hidden lg:block text-xs mt-1 font-medium">{year}</h3></div>
                
            </div>
            
            <div className="drop-shadow-2xl hidden lg:block group-hover:opacity-100 lg:z-20  group-hover:top-32 opacity-0 cursor-default relative top-36 left-32 rounded-full bg-spotify-green w-10 h-10 p-2 hover:scale-110  transition-all duration-300">
                <PlayIcon aria-label="Play Music" className="w-6 h-6 text-white"/>
            </div>
            
        </div>
        
    )
}

export default Mediacard
