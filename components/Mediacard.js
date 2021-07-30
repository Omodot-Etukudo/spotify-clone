import { PlayIcon} from "@heroicons/react/solid"
import Image from 'next/image'
import { BASE_URL, BASE_URL2 } from "../next.config"
function Mediacard({picture, title, artist,year}) {
    
    return (
        <div className="group">
            <div className="lg:absolute cursor-pointer w-32 lg:w-48 lg:bg-gray-800 bg-opacity-50 lg:px-4 pt-4 pb-5 flex flex-col rounded lg:group-hover:bg-gray-700 transition-colors duration-500">
                <div><Image alt={title} placeholder="blur" blurDataURL loading="lazy" className="lg:rounded z-10" width={220} height={220}  src={`${BASE_URL}${picture}` || `${BASE_URL2}${picture}`} /></div>
                <div className="title-text">
                    <h3 className="text-sm  lg:text-base mt-2 lg:mt-4 font-semibold text-white lg:text-left text-center truncate">{title}</h3>
                </div>
                
                <div className="flex lg:text-left text-center"><h3 className=" text-xs mt-1 truncate font-medium lg:text-left lg:mx-0 mx-auto">{artist}</h3><span className="font-bold mx-1 hidden lg:block">&#183;</span><h3 className=" hidden lg:block text-xs mt-1 font-medium">{year}</h3></div>
                
            </div>
            <div className="relative top-6 left-2 lg:top-7 rounded lg:left-6 z-0 lg:w-36 lg:h-36 h-28 w-28 bg-white lg:bg-gray-800 animate-pulse"></div>
            <div className="drop-shadow-2xl hidden  lg:block group-hover:opacity-100 z-20  group-hover:-top-5 opacity-0 cursor-default relative -top-2 left-32 rounded-full bg-spotify-green w-10 h-10 p-2 hover:scale-110  transition-all duration-300">
                <PlayIcon aria-label="Play Music" className="w-6 h-6 text-white"/>
            </div>
            
        </div>
        
    )
}

export default Mediacard
