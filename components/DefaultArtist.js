import Mediacard from "./Mediacard"
import {HeartIcon, PlayIcon, BadgeCheckIcon} from "@heroicons/react/solid"
import {ClockIcon, DotsHorizontalIcon} from "@heroicons/react/outline"
import Image from "next/image"
import DefaultSongComponent from "./DefaultSongComponent"
import MiniSongComponent from "./MiniSongComponent"
import { useState } from "react"
import Tab from "./MiniComponents/Tab"
import ArtistCard from "./ArtistCard"
function DefaultArtist() {
    const artistBg = {
        backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65) ),url(https://i.scdn.co/image/ab6761610000e5eba0e4780f120345edddeaada9)",
        backgroundSize:'auto',
        backgroundRepeat:'repeat',
        backgroundAttachment:'fixed',
        backgroundPosition:'center top'
    };
    const [getFollowing, setFollowing]=useState(false)
    
    return (
        
        <div className="flex flex-col space-y-2 h-screen lg:h-full lg:w-full  lg:max-w-full max-w-full min-w-full py-20 lg:pt-0 lg:pb-6 lg:mb-10 lg:px-0 px-3 lg:dark:bg-main-bg bg-white">
           
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

           <div className="flex flex-col gap-5 lg:pl-56 lg:pr-6  py-4">
                <div className="flex justify-start items-center space-x-6">
                    <div className={`lg:drop-shadow-2xl cursor-default rounded-full bg-spotify-green w-12 h-12 flex justify-center items-center p-2 hover:scale-110  transition-all duration-300`}>
                        <PlayIcon aria-label="Play Music" className="w-7 h-7 text-gray-900"/>
                    </div>
                    <div>
                        {
                            !getFollowing?
                            (<button onClick={()=>setFollowing(!getFollowing)} className="uppercase text-xxs text-main-bg dark:text-white border border-main-bg dark:border-white rounded-sm px-4 py-0.5">Following</button>)
                            :
                            (<button onClick={()=>setFollowing(!getFollowing)} className="uppercase text-xxs text-main-bg dark:text-white border border-main-bg dark:border-white rounded-sm px-4 py-0.5">Follow</button>)
                        }
                    </div>
                    <div>
                        <DotsHorizontalIcon className="w-6 h-6 text-gray-400" />
                    </div>

                    
                </div>
                <div className="grid grid-flow-col grid-cols-12 gap-2">
                    <div className="col-span-10 flex flex-col space-y-2 justify-start items-start w-full">
                        <div className="w-full flex flex-col space-y-6">
                            <h3 className="dark:text-white text-gray-900  text-md lg:text-lg font-semibold">Popular</h3>
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
                            <p className="uppercase text-xxs dark:text-gray-400 text-gray-800  dark:hover:text-white hover:text-gray-900 font-semibold transition-all duration-150">See more</p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        {/* <div className="w-full flex flex-col space-y-6">
                            <h3 className="text-white text-md lg:text-lg font-semibold">Artist Pick</h3>
                            <div className="flex space-x-3 justify-start items-start">
                                <Image alt="Song Name"  loading="lazy" width={70} height={75} className="rounded-sm"  src="https://i.scdn.co/image/ab6761610000e5eba0e4780f120345edddeaada9" />
                                <div className="flex flex-col space-y-1 w-full">
                                    <div className="w-full bg-white px-1 py-0.5 rounded-full" ><p className="text-xs text-black">&#65039; D</p></div>
                                    <div className="flex flex-col space-y-0.5">
                                        <p className="font-semibold text-xs text-white">Burna Boy - Love, Damini</p>
                                        <p className="text-xxs text-gray-300">Playlist</p>
                                    </div>
                                </div>
                            </div> 
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="lg:pl-56 lg:pr-6  py-4">
                <div className="flex flex-col space-y-4 justify-start items-start w-full">
                    <div className="flex flex-row justify-between items-center w-full"><h2 className="dark:text-white text-main-bg text-md lg:text-xl font-semibold">Discography</h2><h3 className="text-xxs uppercase dark:text-gray-300 text-gray-700 hover:underline transition-all duration-150">See All</h3></div>
                    <div className="flex justify-center items-center space-x-3"> <Tab title="Popular releases" isActive /> <Tab title="Albums" /> <Tab title="Singles and EPs" /></div>
                    <div className="w-full flex lg:justify-start lg:space-x-3.5 md:justify-between justify-between items-center flex-wrap lg:flex-nowrap">
                        <Mediacard  picture="ab67616d0000b273b87ac71d440973d20f4c8473" title="Chilombo" artist="Jhené Aiko" />
                        <Mediacard  title="After Hours" artist="The Weeknd" picture="ab67616d0000b2738863bc11d2aa12b54f5aeb36"/>
                        <Mediacard  title="Chemtrails Over The Country Club" artist="Lana Del Rey" picture="ab67616d0000b273e77203dd587322b5f2ddd3f4"/>
                        <Mediacard  title="Somewhere between beauty and magic" artist="Joeboy" picture="ab67616d00001e0234347b639c35a6e57664fb38"/>
                        <Mediacard  title="For Broken Ears" artist="Tems" picture="ab67616d00001e020ab4d3e1c0b5c5e453287a4c"/>
                        <Mediacard  title="Gospel Hits" artist="ZOZO Playlists" picture="ab67706f00000003ab13d877adafef46113954b6"/>
                        <Mediacard  title="Gospel Hits" artist="ZOZO Playlists" picture="ab67706f00000003ab13d877adafef46113954b6"/>
                    </div>
                </div>
            </div>

            <div className="lg:pl-56 lg:pr-6  py-4">
                <div className="flex flex-col space-y-4 justify-start items-start w-full">
                    <div className="flex flex-row justify-between items-center w-full"><h2 className="dark:text-white text-main-bg text-md lg:text-xl font-semibold">Fans also like</h2><h3 className="text-xxs uppercase dark:text-gray-300 text-gray-700 hover:underline transition-all duration-150">See All</h3></div>
                    <div className="w-full flex lg:justify-start lg:space-x-3.5 md:justify-between justify-between items-center flex-wrap lg:flex-nowrap">
                        <ArtistCard name="Bazzi" picture="ab6761610000e5eb335e53b32dfd6e33fef91466" />
                        <ArtistCard name="Burna Boy" picture="ab6761610000e5eba0e4780f120345edddeaada9" />
                        <ArtistCard name="Jack Harlow" picture="ab6761610000e5ebed3a04c76cbc92b97f59c3c0" />                
                        <ArtistCard name="Vance Joy" picture="ab6761610000e5eb8f074ec8c25406680bf26422" />                 
                        <ArtistCard name="Lord Huron" picture="ab6761610000e5eb1d4e4e7e3c5d8fa494fc5f10" />
                        <ArtistCard name="Lord Huron" picture="ab6761610000e5eb1d4e4e7e3c5d8fa494fc5f10" />
                        <ArtistCard name="Tems" picture="ab6761610000e5eb1d3357f91de16a31b194ed32" />  
                    </div>
                </div>
            </div>

           
            
          
            
        </div>
    )
}

export default DefaultArtist
