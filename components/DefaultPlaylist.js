import {HeartIcon, PlayIcon, } from "@heroicons/react/solid"
import {ClockIcon, DotsHorizontalIcon, PencilAltIcon} from "@heroicons/react/outline"
import Image from "next/image"
import DefaultSongComponent from "./DefaultSongComponent"

function DefaultPlaylist() {
    return (
        <div className="flex flex-col space-y-6 h-screen lg:h-full lg:w-full lg:pl-56 lg:pr-6 lg:max-w-full max-w-full min-w-full py-20 lg:pt-16 lg:pb-6 lg:mb-10 px-3 lg:dark:bg-main-bg bg-white">
           <div className="w-full py-1 flex justify-start items-end space-x-6">
                <div className="  w-48 h-48 group shadow-2xl">
                    <div className="flex flex-wrap h-full w-full">
                        <Image alt="Song Name"  loading="lazy" width={95} height={95} className="w-1/2 h-1/2"  src="https://i.scdn.co/image/ab67616d0000b273134fdccfc042e4725cbfd15e" />
                        <Image alt="Song Name"  loading="lazy" width={95} height={95} className="w-1/2 h-1/2"  src="https://i.scdn.co/image/ab67616d0000b273134fdccfc042e4725cbfd15e" />
                        <Image alt="Song Name"  loading="lazy" width={95} height={95} className="w-1/2 h-1/2"  src="https://i.scdn.co/image/ab67616d0000b273134fdccfc042e4725cbfd15e" />
                        <Image alt="Song Name"  loading="lazy" width={95} height={95} className="w-1/2 h-1/2"  src="https://i.scdn.co/image/ab67616d0000b273134fdccfc042e4725cbfd15e" />
                    </div>
                    
                </div>
                <div className="flex flex-col space-y-8 justify-end dark:text-white text-main-bg" >
                    <div className="flex flex-col space-y-2">
                        <h3 className="uppercase text-xxs ">Playlist</h3>
                        <h1 className="font-extrabold lg:text-6xl md:text-4xl text-2xl ">Amapiano on the rocks</h1>
                    </div>
                    <div className="flex space-x-1 justify-start items-center  text-xxs"><p className="font-semibold">Omodot</p><span>&#183;</span><p>97 Songs</p><span>&#183;</span><p>2 hr 25 min</p></div>
                </div>
           </div>
           <div className="flex flex-col space-y-4 justify-start items-start">
                <div className="flex space-x-4 justify-start items-center">
                    <div className={`lg:drop-shadow-2xl cursor-default rounded-full bg-spotify-green w-12 h-12 flex justify-center items-center p-2 hover:scale-110  transition-all duration-300`}>
                        <PlayIcon aria-label="Play Music" className="w-7 h-7 text-gray-900"/>
                    </div>
                    <div><DotsHorizontalIcon className="w-5 h-5 dark:text-gray-300 text-gray-700" /></div>
                </div>
                <div className="w-full lg:pl-0">
                    <table className="w-full pl-4">
                        <thead className="uppercase border-b dark:border-card-hover border-gray-100 dark:bg-main-bg dark:text-gray-300 text-main-bg bg-white lg:sticky lg:top-14  z-10 bg-opacity-95">
                            <tr>
                                <th className="font-light text-xxs pb-2 text-left pl-3 pr-5 w-6 ">#</th>
                                <th className="font-light text-xxs pb-2 text-left lg:w-5/12">Title</th>
                                <th className="font-light text-xxs pb-2 text-left lg:w-4/12">Album</th>
                                <th className="font-light text-xxs pb-2 text-left lg:w-3/12">Date Added</th>
                                <th className="font-light text-xxs pb-2 text-center pl-12 pr-0"><ClockIcon className="w-4 h-4"  /></th>
                            </tr>
                        </thead>
                        &nbsp; 
                        <tbody>               
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                        </tbody>
                    </table>
                </div>

            </div> 
            
        </div>
    )
}

export default DefaultPlaylist
