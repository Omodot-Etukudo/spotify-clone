import {PlayIcon, HeartIcon } from "@heroicons/react/solid"
import {ClockIcon, DotsHorizontalIcon} from "@heroicons/react/outline"
import { BASE_URL, BASE_URL2, BASE_URL3 } from "../next.config"
import Image from "next/image"


function DefaultSongComponent({title, duration, isPlaying, isLiked, isAlbum, picture, artist, position, albumName, dateAdded}) {
    return (
        
            <tr className=" cursor-default rounded-md group dark:hover:bg-card-hover dark:bg-main-bg bg-white hover:bg-gray-100 transition-all duration-150">
                <td className="py-2 px-2 w-8 font-light text-xxs"><p className="block group-hover:hidden">{position}</p> <PlayIcon className="w-5 h-5 dark:text-gray-100 text-main-bg hidden group-hover:block" /> </td>
                <td className="py-2">
                    <div className="flex space-x-3 items-center justify-start">
                        <Image alt="Song Name"  loading="lazy" width={35} height={37} className="rounded-sm"  src={`${BASE_URL}${picture}` || `${BASE_URL2}${picture}` || `${BASE_URL3}${picture}`} />
                        <div className="flex flex-col space-y-1"><p className="text-xs font-medium dark:text-gray-100 text-main-bg">{title}</p><p className="text-xxs dark:text-gray-400 text-gray-900">{artist}</p></div>
                    </div>
                    </td>  
                <td className={`${isAlbum?"hidden":"py-2 text-xxs dark:text-gray-400 text-gray-700"}`} >{albumName}</td>
                <td className={`${isAlbum?"hidden":"py-2 text-xxs dark:text-gray-400 text-gray-700"}`} >{dateAdded}</td>
                <td className="py-2 text-right pr-4"><div className="flex justify-start items-center space-x-4"><div className="flex justify-end items-center space-x-6"><HeartIcon className={`w-5 h-5 ${isLiked?"text-spotify-green":"dark:text-gray-700 text-gray-300"}`} /><p className="text-xxs dark:text-gray-400 text-gray-700">{duration}</p></div><DotsHorizontalIcon className="w-4 h-4 opacity-0 group-hover:opacity-100" /></div></td>
            </tr>
         
        
    )
}

export default DefaultSongComponent
