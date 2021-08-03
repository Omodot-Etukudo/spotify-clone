import { PlayIcon} from "@heroicons/react/solid"
import Image from 'next/image'
import { BASE_URL, BASE_URL2 } from "../next.config"

function ShortcutMedia({picture, title}) {
    return (
        <div className=" w-84 rounded-md mr-5 group mt-6 h-20 max-h-20 min-h-20 flex space-x-4 pr-0 bg-gray-800 hover:bg-gray-700 transition-colors duration-500 cursor-pointer shadow-2xl drop-shadow-2xl">
            <div>
                <Image placeholder="blur" blurDataURL loading="lazy" className="rounded-l-md max-h-80 min-h-80" width="80" height="80" src={`${BASE_URL}${picture}` || `${BASE_URL2}${picture}`}/>
            </div>
            <div className="my-auto">
                <h3 className="font-semibold text-gray-100 text-md w-40 truncate">{title}</h3>
            </div>
            
            <div className="relative h-10 p-2 cursor-default bg-spotify-green drop-shadow-2xl shadow-2xl rounded-full top-5 group-hover:block hidden -left-2 hover:scale-110"><PlayIcon className="w-6 h-6 text-white"/></div>
            
        </div>
    )
}

export default ShortcutMedia
