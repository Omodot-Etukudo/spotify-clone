import Mediacard from "./Mediacard"
import {HeartIcon, PlayIcon, BadgeCheckIcon} from "@heroicons/react/solid"
import {ClockIcon, DotsHorizontalIcon} from "@heroicons/react/outline"
import Image from "next/image"
import DefaultSongComponent from "./DefaultSongComponent"
import MiniSongComponent from "./MiniSongComponent"
function DefaultArtist() {
    const artistBg = {
        backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65) ),url(https://i.scdn.co/image/ab6761610000e5eba0e4780f120345edddeaada9)",
        backgroundSize:'Cover',
        backgroundAttachment:'fixed',
    };
    return (
        
        <div className="flex flex-col space-y-0 h-screen lg:h-full lg:w-full  lg:max-w-full max-w-full min-w-full py-20 lg:pt-0 lg:pb-6 lg:mb-10 lg:px-0 px-3 lg:bg-main-bg">
           
           <div className="lg:pl-56 lg:pt-0 pb-8" style={artistBg}>
                <div className="flex flex-col space-y-10 text-white lg:pt-40">
                    <div className="flex flex-col justify-start items-start space-y-2 ">
                        <div className="flex justify-center items-center space-x-2"><BadgeCheckIcon className="w-5 h-5 text-blue-500" /><p className="text-xxs">Verified Artist</p></div>
                        <h3 className="font-extrabold lg:text-6xl md:text-4xl text-2xl">Burna Boy</h3>
                    </div>
                    <div>
                        <p className="text-xs">18,764,800 monthly listeners</p>
                        
                    </div>
                </div>
           </div>

           <div className="flex flex-col space-y-4 lg:pl-56 lg:pr-6  py-4 bg-main-bg">
                <div className="flex justify-start items-center space-x-6">
                    <div className={`lg:drop-shadow-2xl cursor-default rounded-full bg-spotify-green w-12 h-12 flex justify-center items-center p-2 hover:scale-110  transition-all duration-300`}>
                        <PlayIcon aria-label="Play Music" className="w-7 h-7 text-gray-900"/>
                    </div>
                    <div>
                        <button className="uppercase text-xxs text-white border border-white rounded-sm px-4 py-0.5">Following</button>
                    </div>
                    <div>
                        <DotsHorizontalIcon className="w-6 h-6 text-gray-400" />
                    </div>

                    
                </div>
                <div className="grid grid-flow-col grid-cols-12 gap-4">
                    <div className="col-span-9 flex flex-col space-y-2 justify-start items-start w-full">
                        <div className="w-full flex flex-col space-y-6">
                            <h3 className="text-white text-md lg:text-lg font-semibold">Popular</h3>
                            <div className="flex flex-col space-y-1 justify-start items-start w-full">
                                <MiniSongComponent/>
                                <MiniSongComponent/>
                                <MiniSongComponent/>
                                <MiniSongComponent/>
                                <MiniSongComponent/>
                                <MiniSongComponent/>
                            </div> 
                        </div> 
                        <div className="flex justify-start items-start">
                            <p className="uppercase text-xxs text-gray-400  hover:text-white font-semibold transition-all duration-150">See more</p>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="w-full flex flex-col space-y-6">
                            <h3 className="text-white text-md lg:text-lg font-semibold">Artist Pick</h3>
                            <div className="flex space-x-3 justify-start items-start">
                                <Image alt="Song Name"  loading="lazy" width={70} height={75} className="rounded-sm"  src="https://i.scdn.co/image/ab67616d0000b273134fdccfc042e4725cbfd15e" />
                                <div className="flex flex-col space-y-1 w-full">
                                    <div className="w-full bg-white px-1 py-0.5 rounded-full" ><p className="text-xs text-black">&#65039; D</p></div>
                                    <div className="flex flex-col space-y-0.5">
                                        <p className="font-semibold text-xs text-white">Burna Boy - Love, Damini</p>
                                        <p className="text-xxs text-gray-300">Playlist</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
           </div>
            
          
            
        </div>
    )
}

export default DefaultArtist
