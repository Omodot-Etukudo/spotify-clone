import PrimaryButton from "../../components/PrimaryButton"
import Mediacard from "../Mediacard"
import LikedSongs from "../LikedSongs"
import {HeartIcon, PlayIcon, } from "@heroicons/react/solid"
import {ClockIcon} from "@heroicons/react/outline"
import Image from "next/image"
import DefaultSongComponent from "../DefaultSongComponent"
function LikedComponent() {
    return (
        <div className="flex flex-col space-y-6 h-screen lg:h-screen lg:w-full lg:pl-56 lg:pr-6 lg:max-w-full max-w-full min-w-full py-20 lg:pt-16 lg:pb-60 lg:mb-40 px-3 lg:bg-main-bg">
           <div className="w-full py-1 flex justify-start items-end space-x-6">
                <div className=" bg-gradient-to-br from-purple-400 via-purple-800 to-gray-500 p-14 flex justify-center items-center">
                    <HeartIcon className="w-20 text-white" />
                </div>
                <div className="flex flex-col space-y-8 justify-end" >
                    <div className="flex flex-col space-y-2">
                        <h3 className="uppercase text-xs text-white">Playlist</h3>
                        <h1 className="font-semibold text-6xl text-white">Liked Songs</h1>
                    </div>
                    <div className="flex space-x-1 justify-start items-center text-white text-xxs"><p className="font-semibold">Omodot</p><span>&#183;</span><p>97 Songs</p></div>
                </div>
           </div>
           <div className="flex flex-col space-y-4 justify-start items-start">
                <div className={`lg:drop-shadow-2xl cursor-default rounded-full bg-spotify-green w-12 h-12 flex justify-center items-center p-2 hover:scale-110  transition-all duration-300`}>
                    <PlayIcon aria-label="Play Music" className="w-7 h-7 text-gray-900"/>
                </div>

                <div className="w-full lg:pl-0">
                    <table className="w-full pl-4">
                        <thead className="uppercase border-b border-gray-800">
                            <tr>
                                <th className="font-light text-xxs pb-2 text-left pl-3 pr-5 w-6 ">#</th>
                                <th className="font-light text-xxs pb-2 text-left lg:w-4/12">Title</th>
                                <th className="font-light text-xxs pb-2 text-left lg:w-4/12">Album</th>
                                <th className="font-light text-xxs pb-2 text-left lg:w-3/12">Date Added</th>
                                <th className="font-light text-xxs pb-2 text-center pl-12 pr-0"><ClockIcon className="w-4 h-4 text-gray-200"  /></th>
                            </tr>
                        </thead>
                        &nbsp; 
                        <tbody>
                                
                            <DefaultSongComponent isLiked />
                            <DefaultSongComponent/>
                            <DefaultSongComponent isLiked/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent isLiked/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent/>
                            <DefaultSongComponent isLiked/>
                            <DefaultSongComponent isLiked/>
                            <DefaultSongComponent/>
                        </tbody>
                    </table>
                </div>

            </div> 
        </div>
    )
}

export default LikedComponent
