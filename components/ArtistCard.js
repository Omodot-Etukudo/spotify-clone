import { PlayIcon} from "@heroicons/react/solid"
import Image from 'next/image'
import { BASE_URL, BASE_URL2, BASE_URL3 } from "../next.config"
function ArtistCard({picture, name}) {
    
    return (
        <div className="group h-54">
            <div className=" cursor-pointer w-32 lg:w-38 lg:bg-card-bg lg:shadow-xl bg-opacity-50 lg:px-4 pt-4 pb-5 flex flex-col rounded lg:group-hover:bg-card-hover transition-colors duration-500">
                <div className="-z-10 lg:z-auto"><Image alt={name} placeholder="blur" blurDataURL loading="lazy" className="rounded-full lg:flex lg:drop-shadow-2xl" width={220} height={220}  src={`${BASE_URL}${picture}` || `${BASE_URL2}${picture}` || `${BASE_URL3}${picture}`} /></div>
                <div className="title-text">
                    <h3 className="text-xs lg:text-xs mt-2 lg:mt-4 font-semibold text-white lg:text-left text-center truncate">{name}</h3>
                </div>
               
                <div className="flex"><h3 className=" text-xxs mt-1 truncate lg:text-left lg:mx-0 mx-auto">Artist</h3></div>
                
            </div>
            
            <div className={`lg:drop-shadow-2xl lg:block hidden group-hover:opacity-100 lg:z-20  group-hover:-top-32 opacity-0 cursor-default lg:relative -top-28 left-24 rounded-full bg-spotify-green w-10 h-10 p-2 hover:scale-110  transition-all duration-300`}>
                <PlayIcon aria-label="Play Music" className="w-6 h-6 text-gray-900"/>
            </div>
            
        </div>
        
    )
}

export default ArtistCard
