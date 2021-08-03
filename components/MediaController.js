import { HeartIcon, ViewGridIcon, ViewListIcon , VolumeUpIcon, DesktopComputerIcon, SwitchHorizontalIcon, SwitchVerticalIcon} from "@heroicons/react/outline"
import { ChevronUpIcon, PlayIcon, RewindIcon, FastForwardIcon, PauseIcon} from "@heroicons/react/solid"
import Image from 'next/image'
import OutlinedHeart from "./HeartIcons/OutlinedHeart"
import SolidHeart from "./HeartIcons/SolidHeart"
import { BASE_URL, BASE_URL2 } from "../next.config"
import MediaTileBig from "./MediaTileBig"
import React, {useState} from "react"
function MediaController() {
    const[mediaTileShow, toggleTile] = useState(false)
    const [isPaused, togglePlay]= useState(true)
    const [isLiked, toggleLike]= useState(true)
    return (
        <div className="absolute lg:z-50 z-100">
            
            {
                mediaTileShow? <MediaTileBig/>:null
            }
            
            <div className="w-full left-0 bg-gray-900 border-t lg:border-b-0 border-b border-gray-800 lg:py-4 py-2 fixed lg:bottom-0 bottom-14">
                
                <div className="hidden lg:flex flex-row justify-between px-6">
                    
                    <div>
                        <div className=" flex justify-between">
                            <div className="absolute group">
                                <Image className="rounded-sm drop-shadow-2xl group-hover:brightness-75 shadow-2xl lg:z-10" src={`${BASE_URL}${"ab67616d0000b27327b8470985bb498d4fd8cee3"}`} width={55} height={55} loading="lazy"></Image>
                                <div onClick={()=>toggleTile(!mediaTileShow)} className="relative group-hover:block hidden -top-14 p-1 w-6 left-7 lg:z-50 rounded-full bg-black hover:scale-110 transition-transform duration-100 black bg-opacity-70 hover:text-white"><ChevronUpIcon className="  w-4 h-4"/></div>
                            </div>
                            
                            <div className="flex flex-col pt-3 pl-14 max-w-60 w-60 ml-4">
                                <h3 className="text-white text-xs cursor-pointer hover:underline transition-all duration-300 sm:truncate md:truncate whitespace-nowrap">Time Go Come (feat. Phlow)</h3>
                                <h3 className="font-light mb-2 text-xs cursor-pointer hover:text-white hover:underline transition-all duration-200">Ignis Brothers</h3>
                            </div>
                            <div className="flex space-x-3 my-auto">
                            {isLiked?<OutlinedHeart onClick={()=>toggleLike(!isLiked)}  />:null}
                            {!isLiked?<SolidHeart onClick={()=>toggleLike(!isLiked)}  />:null}
                               <ViewGridIcon className="w-4 h-4 hover:text-white transition-colors duration-300"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex space-x-3 mx-auto my-auto">
                            <SwitchHorizontalIcon className="w-4 h-4 my-auto hover:text-white transition-colors duration-100" />
                            <RewindIcon className="w-5 h-5 my-auto hover:text-white transition-colors duration-100"/>
                    {isPaused?<PlayIcon onClick={()=>togglePlay(!isPaused)} className="w-10 h-10 text-white hover:scale-110 transition-all duration-100 shadow-2xl drop-shadow-2xl"/> :null}
                    {!isPaused?<PauseIcon onClick={()=>togglePlay(!isPaused)} className="w-10 h-10 text-white hover:scale-110 transition-all duration-100 shadow-2xl drop-shadow-2xl" /> :null}
                            <FastForwardIcon className="w-5 h-5 my-auto hover:text-white transition-colors duration-100"/>
                            <SwitchVerticalIcon className="w-4 h-4 my-auto hover:text-white transition-colors duration-100" />
                        </div>
                        <div className="flex space-x-2 px-24">
                            <h1 className="text-xs my-auto">0:00</h1>
                            <input readOnly type="range" min="1" max="100" value="0" className="ml-2 h-1 w-110 my-2 slider" />
                            <h1 className="text-xs my-auto">4:30</h1>
                        </div>
                    </div>
                    <div className="flex space-x-3 my-auto">
                        <ViewListIcon className="w-5 h-5 hover:text-white transition-colors duration-300" />
                        <DesktopComputerIcon className="w-5 h-5 hover:text-white transition-colors duration-300" />
                        <div className="flex group">
                            <VolumeUpIcon className="w-5 h-5 group-hover:text-white transition-colors duration-100" />
                            <input readOnly type="range" min="1" max="100" value="90" className="ml-2 h-1 my-2 slider" />
                        </div>
                    </div>
                </div>
                {/* MOBILE COMPONENTS */}
                <div className="flex justify-between lg:hidden px-2 border-b pb-2 border-gray-800" >
                    <div>
                        <HeartIcon className="w-7 h-7 my-1.5 text-white" />
                    </div>
                    <div className="px-4 h-full">
                        <div className="flex my-2 space-x-2"><h3 className="text-sm truncate my-auto font-semibold text-white w-40">Time Go Come (feat. Phlow)</h3><h3 className="font-bold my-auto text-white">&#183;</h3><h3 className="text-xs font-semibold my-auto w-16 truncate">Ignis Brothers</h3></div>
                    </div>
                    <div>
                        {isPaused?<PlayIcon onClick={()=>togglePlay(!isPaused)} className="w-8 h-8 mt-1 text-white transition-all active:scale-110 duration-100 shadow-2xl drop-shadow-2xl"/> :null}
                        {!isPaused?<PauseIcon onClick={()=>togglePlay(!isPaused)} className="w-8 h-8 mt-1 text-white transition-all active:scale-110 duration-100 shadow-2xl drop-shadow-2xl" /> :null}
                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default MediaController
