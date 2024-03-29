import PrimaryButton from "../../components/PrimaryButton"
import Mediacard from "../Mediacard"
import LikedSongs from "../LikedSongs"
import {HeartIcon, PlayIcon, } from "@heroicons/react/solid"
import {ClockIcon} from "@heroicons/react/outline"
import Image from "next/image"
import DefaultSongComponent from "../DefaultSongComponent"
import data from "../../pages/api/feed.json"
function LikedComponent() {
    return(
        <div className="flex flex-col space-y-6 h-screen lg:h-full lg:w-full lg:pl-56 lg:pr-6 lg:max-w-full max-w-full min-w-full py-20 lg:pt-16 lg:pb-6 lg:mb-10 px-3 lg:dark:bg-main-bg bg-white">
            <div>
            <div className="w-full py-1 flex justify-start items-end space-x-6">
                <div className=" bg-gradient-to-br from-purple-400 via-purple-800 to-gray-500 p-14 flex justify-center items-center shadow-2xl">
                    <HeartIcon className="w-20 text-white" />
                </div>
                <div className="flex flex-col space-y-8 justify-end dark:text-white text-main-bg" >
                    <div className="flex flex-col space-y-2">
                        <h3 className="uppercase text-xxs ">Playlist</h3>
                        <h1 className="font-extrabold lg:text-6xl md:text-4xl text-2xl ">Liked Songs</h1>
                    </div>
                    <div className="flex space-x-1 justify-start items-center  text-xxs"><p className="font-semibold">Omodot</p><span>&#183;</span><p>16 Songs</p></div>
                </div>
            </div>
            <div className="flex flex-col space-y-4 justify-start items-start">
            <div className=" my-4 lg:drop-shadow-2xl cursor-default rounded-full bg-spotify-green w-12 h-12 flex justify-center items-center p-2 hover:scale-110  transition-all duration-300">
                <PlayIcon aria-label="Play Music" className="w-7 h-7 text-gray-900"/>
            </div>

        <div className="w-full lg:pl-0">
            <table className="w-full pl-4">
                <thead className="uppercase border-b dark:border-card-hover border-gray-200 lg:sticky lg:top-14 dark:bg-main-bg bg-white z-10 bg-opacity-95 dark:text-gray-300 text-main-bg">
                    <tr>
                        <th className="font-light text-xxs pb-2 text-left pl-3 pr-5 w-6 ">#</th>
                        <th className="font-light text-xxs pb-2 text-left lg:w-5/12">Title</th>
                        <th className="font-light text-xxs pb-2 text-left lg:w-4/12">Album</th>
                        <th className="font-light text-xxs pb-2 text-left lg:w-3/12">Date Added</th>
                        <th className="font-light text-xxs pb-2 text-center pl-12 pr-0"><ClockIcon className="w-4 h-4"  /></th>
                    </tr>
                </thead>
            
                <tbody>
                    {data.map((content)=>{
                        return content,
                        content.feed.map((media)=>{
                            return media,
                            media.data.map((songs)=>{
                                const newArray = []      
                                newArray.push(songs)
                                const likedSongs=newArray.filter(subContent => subContent.isLiked)
                                return likedSongs,
                                likedSongs.map((newData=>{
                                        
                                        return (
                                            
                                                
                                                <DefaultSongComponent position={likedSongs.lastIndexOf(newData)+1} key={newData.name} title={newData.name} albumName={media.name} picture={media.cover} artist={media.creator} duration={newData.duration} dateAdded={`Oct 14,2022`} isLiked isAlbum={false} />
                                                                 
                                                
                                        )
                                       
                                }))
                                
                            })
                        })
                    })}
            

                </tbody>
            </table>
            </div>

            </div> 
        </div>
    </div>
    )
        
    
}

export default LikedComponent
