import Mediacard from "./Mediacard"
import {HeartIcon, PlayIcon, BadgeCheckIcon} from "@heroicons/react/solid"
import {ClockIcon, DotsHorizontalIcon} from "@heroicons/react/outline"
import Image from "next/image"
import DefaultSongComponent from "./DefaultSongComponent"
function DefaultArtist() {
    const artistBg = {
        backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(https://i.scdn.co/image/ab6761610000e5eba0e4780f120345edddeaada9)",
        backgroundRepeat: 'repeat',
        backgroundAttachment:'fixed',
    };
    return (
        
        <div className="flex flex-col space-y-0 h-screen lg:h-full lg:w-full  lg:max-w-full max-w-full min-w-full py-20 lg:pt-16 lg:pb-6 lg:mb-10 px-3 lg:bg-main-bg">
           
           <div className="bg-main-bg lg:pl-56 lg:pt-20 pb-8" style={artistBg}>
                <div className="flex flex-col space-y-10 text-white">
                    <div className="flex flex-col justify-start items-start space-y-2 ">
                        <div className="flex justify-center items-center space-x-2"><BadgeCheckIcon className="w-5 h-5 text-blue-500" /><p className="text-xxs">Verified Artist</p></div>
                        <h3 className="font-extrabold lg:text-6xl md:text-4xl text-2xl">Burna Boy</h3>
                    </div>
                    <div>
                        <p className="text-xs">18,764,800 monthly listeners</p>
                        
                    </div>
                </div>
           </div>

           <div className="flex flex-col space-y-4 lg:pl-56 lg:pr-6  py-4">
                <div className="flex justify-start items-center space-x-4">
                    <div className={`lg:drop-shadow-2xl cursor-default rounded-full bg-spotify-green w-12 h-12 flex justify-center items-center p-2 hover:scale-110  transition-all duration-300`}>
                        <PlayIcon aria-label="Play Music" className="w-7 h-7 text-gray-900"/>
                    </div>
                    <div>
                        <button className="uppercase text-xxs text-white border border-white rounded-sm px-3 py-0.5">Following</button>
                    </div>
                    <div>
                        <DotsHorizontalIcon className="w-6 h-6 text-gray-400" />
                    </div>

                    
                </div>
                <div>

                </div>
           </div>
            
          
            
        </div>
    )
}

export default DefaultArtist
