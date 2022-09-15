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
            
            <div className="w-full left-0 dark:bg-main-bg bg-gray-100 border-t lg:border-b-0 border-b dark:border-card-hover border-gray-200 lg:py-2 py-2 fixed lg:bottom-0 bottom-14">
                
                <div className="hidden lg:flex flex-row justify-between items-center px-6">
                    
                    <div>
                        <div className=" flex justify-between">
                            <div className="flex space-x-1">
                                <div className="absolute group">
                                    <Image alt="media-cover" className="rounded-sm drop-shadow-2xl group-hover:brightness-75 shadow-2xl lg:z-10" src={`${BASE_URL}${"ab67616d0000b27327b8470985bb498d4fd8cee3"}`} width={50} height={50} loading="lazy"></Image>
                                    <div onClick={()=>toggleTile(!mediaTileShow)} className="relative group-hover:block hidden -top-12 p-1 w-6 -right-6 lg:z-50 rounded-full bg-black hover:scale-110 transition-transform duration-100 black bg-opacity-70 hover:text-white"><ChevronUpIcon className="  w-4 h-4"/></div>
                                </div>
                                
                                <div className="flex flex-col pt-3 pl-14 max-w-60 w-60 ml-4">
                                    <h3 className="dark:text-white text-black text-xs cursor-pointer hover:underline transition-all duration-300 sm:truncate md:truncate whitespace-nowrap">Time Go Come (feat. Phlow)</h3>
                                    <h3 className="font-light mb-2 text-xs cursor-pointer dark:hover:text-white dark:text-gray-300 text-gray-700 hover:text-gray-500 hover:underline transition-all duration-200">Ignis Brothers</h3>
                                </div>
                            </div>

                            <div className="flex space-x-3 my-auto">
                            {isLiked?<OutlinedHeart onClick={()=>toggleLike(!isLiked)}  />:null}
                            {!isLiked?<SolidHeart onClick={()=>toggleLike(!isLiked)}  />:null}
                               <ViewGridIcon className="w-4 h-4 dark:text-gray-300 text-main-bg hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-300"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-0">
                        <div className="flex space-x-3 mx-auto my-auto">
                            <SwitchHorizontalIcon className="w-4 h-4 my-auto dark:text-gray-300 text-main-bg hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-100" />
                            <RewindIcon className="w-5 h-5 my-auto dark:text-gray-300 text-main-bg hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-100"/>
                            {isPaused?<PlayIcon onClick={()=>togglePlay(!isPaused)} className="w-10 h-10 dark:text-gray-300 text-card-hover hover:text-gray-500 dark:hover:text-gray-300 hover:scale-110 transition-all duration-100 shadow-2xl drop-shadow-2xl"/> :null}
                            {!isPaused?<PauseIcon onClick={()=>togglePlay(!isPaused)} className="w-10 h-10 dark:text-gray-300 text-card-hover hover:text-gray-500 dark:hover:text-gray-300 hover:scale-110 transition-all duration-100 shadow-2xl drop-shadow-2xl" /> :null}
                            <FastForwardIcon className="w-5 h-5 my-auto dark:text-gray-300 text-main-bg hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-100"/>
                            <SwitchVerticalIcon className="w-4 h-4 my-auto dark:text-gray-300 text-main-bg hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-100" />
                        </div>
                        <div className="flex space-x-2 justify-center items-center px-24">
                            <h1 className="text-xxs">0:00</h1>
                            <div className="w-110 h-0.75 dark:bg-card-hover bg-gray-300 rounded-full flex justify-start items-center mt-0.5">
                                <div className="w-6/12 h-0.75 dark:bg-white bg-main-bg hover:bg-spotify-green transition-all relative duration-150 rounded-full before:absolute before:-mt-1 before:drop-shadow-sm before:border before:border-gray-200 before:hidden hover:before:block before:shadow-sm before:-right-1 before:rounded-full before:w-3 before:h-3 before:bg-white"></div>        
                            </div>
                            <h1 className="text-xxs">4:30</h1>
                        </div>
                    </div>
                    <div className="flex space-x-3 my-auto">
                        <ViewListIcon className="w-4 h-4 dark:text-gray-300 text-main-bg hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-300" />
                        <DesktopComputerIcon className="w-4 h-4 dark:text-gray-300 text-main-bg hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-300" />
                        <div className="flex space-x-2 group justify-center items-center">
                            <VolumeUpIcon className="w-4 h-4 group-dark:text-gray-300 dark:text-gray-300 text-main-bg hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-100" />
                            <div className=" w-28 h-0.75 dark:bg-card-hover bg-gray-300 rounded-full flex justify-start items-center ">
                                <div className="w-8/12 h-0.75 dark:bg-white bg-main-bg group-hover:bg-spotify-green transition-all relative duration-150 rounded-full before:absolute before:-mt-1 before:drop-shadow-sm before:border before:border-gray-200 before:hidden group-hover:before:block before:shadow-sm before:-right-1 before:rounded-full before:w-3 before:h-3 before:bg-white"></div>     
                            </div>
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
