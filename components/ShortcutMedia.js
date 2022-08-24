import { PlayIcon} from "@heroicons/react/solid"
import Image from 'next/image'
import { BASE_URL, BASE_URL2 } from "../next.config"

function ShortcutMedia({picture, title}) {
    return (
        <div className=" w-96 rounded-md group h-16 flex space-x-4 pr-0 bg-gray-800 hover:bg-gray-700 transition-colors duration-500 cursor-pointer shadow-2xl drop-shadow-2xl">
            <div className=" h-full max-h-full">
                <Image  placeholder="blur" blurDataURL loading="lazy" className="rounded-l-md h-full" width={60} height={64} alt={`${title}`} src={`${BASE_URL}${picture}` || `${BASE_URL2}${picture}`}/>
            </div>
            <div className="my-auto ">
                <h3 className="font-semibold text-gray-100 text-sm w-40 truncate">{title}</h3>
            </div>
            
            <div className="relative h-10 p-2 cursor-default bg-spotify-green drop-shadow-2xl shadow-2xl rounded-full top-3 group-hover:block hidden -right-20 hover:scale-110 transition-all duration-150"><PlayIcon className="w-6 h-6 text-white"/></div>
            
        </div>
    )
}

export default ShortcutMedia
