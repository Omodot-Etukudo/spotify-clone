import {PlayIcon, HeartIcon } from "@heroicons/react/solid"
import {ClockIcon, DotsHorizontalIcon} from "@heroicons/react/outline"
import Image from "next/image"


function DefaultSongComponent({isLiked, isAlbum}) {
    return (
        
            <tr className=" cursor-default rounded-md group hover:bg-card-hover transition-all duration-150">
                <td className="py-2 px-2 w-8 font-light text-xxs"><p className="block group-hover:hidden">1</p> <PlayIcon className="w-4 h-4 text-gray-100 hidden group-hover:block" /> </td>
                <td className="py-2">
                    <div className="flex space-x-3 items-center justify-start">
                        <Image alt="Song Name"  loading="lazy" width={35} height={37} className="rounded-sm"  src="https://i.scdn.co/image/ab67616d0000b273134fdccfc042e4725cbfd15e" />
                        <div className="flex flex-col space-y-1"><p className="text-xs text-gray-100">Wish You Were Here &#40;feat. Khalid&#41;</p><p className="text-xxs text-gray-400">Jacob Banks</p></div>
                    </div>
                    </td>  
                <td className={`${isAlbum?"hidden":"py-2 text-xxs text-gray-400"}`} >Wish You Were Here &#40;feat. Khalid&#41;</td>
                <td className={`${isAlbum?"hidden":"py-2 text-xxs text-gray-400"}`} >1 day ago</td>
                <td className="py-2 text-right pr-4"><div className="flex justify-start items-center space-x-4"><div className="flex justify-end items-center space-x-6"><HeartIcon className={`w-5 h-5 ${isLiked?"text-spotify-green":"text-gray-700"}`} /><p className="text-xxs text-gray-400">3:55</p></div><DotsHorizontalIcon className="w-4 h-4 opacity-0 group-hover:opacity-100" /></div></td>
            </tr>
         
        
    )
}

export default DefaultSongComponent
