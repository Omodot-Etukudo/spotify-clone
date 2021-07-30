import { PlayIcon} from "@heroicons/react/solid"
import Image from 'next/image'
import { BASE_URL, BASE_URL2 } from "../next.config"

function ShortcutMedia({picture, title}) {
    return (
        <div className=" w-86 rounded-md absolute group h-20 max-h-20 min-h-20 flex space-x-4 pr-0 bg-gray-800 hover:bg-gray-700 transition-colors duration-500 cursor-pointer">
            <div>
                <Image className="rounded-l-md max-h-80 min-h-80" width="80" height="80" src="https://i.scdn.co/image/ab67706c0000bebb36ad4d3d19716d3d546b2997"/>
            </div>
            <div className="my-auto">
                <h3 className="font-semibold text-gray-100 text-md w-40">{title.substr(0,25)+"..."}</h3>
            </div>
            
            <div className="relative h-10 right-0 p-2 bg-spotify-green rounded-full top-5 group-hover:block hidden left-2 hover:scale-110"><PlayIcon className="w-6 h-6 text-white"/></div>
            
        </div>
    )
}

export default ShortcutMedia
