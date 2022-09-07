import {PlayIcon} from "@heroicons/react/solid"
import {DotsHorizontalIcon, HeartIcon} from "@heroicons/react/outline"
import Image from "next/image"


function MiniSongComponent() {
    return (
        
            <div className="group w-full bg-main-bg hover:bg-card-hover transition-all duration-150 cursor-default rounded-md group flex justify-between items-center py-2 px-4">
                    {/* <Image alt="Song Name"  loading="lazy" width={35} height={37} className="rounded-sm"  src="https://i.scdn.co/image/ab67616d0000b273134fdccfc042e4725cbfd15e" /> */}
                <div className="flex justify-center items-center space-x-2">
                    <div className="w-4">
                        <p className="block group-hover:hidden text-xxs font-light">1</p> <PlayIcon className="w-4 h-4 text-gray-100 hidden group-hover:block" /> 
                    </div>
                    <div className="flex space-x-3 items-center justify-start">
                        <Image alt="Song Name"  loading="lazy" width={30} height={30} className="rounded-sm"  src="https://i.scdn.co/image/ab6761610000e5eba0e4780f120345edddeaada9" />
                        <p className="text-xs text-gray-100">Wish You Were Here &#40;feat. Khalid&#41;</p>
                    </div>
                </div>
                <div className="flex justify-between items-center w-6/12">
                    <p className="text-xxs text-gray-400 text-right group-hover:text-white">93,240,456</p>
                    <div className="flex justify-center items-center space-x-6">
                        <HeartIcon className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100" />
                        <div className="flex justify-center items-center space-x-3">
                            <p className="text-xxs text-gray-400">2:52</p>
                            <DotsHorizontalIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                        </div>
                        
                    </div>
                </div>
            </div>
            
                        
         
        
    )
}

export default MiniSongComponent
