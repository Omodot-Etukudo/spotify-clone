import {SearchIcon , CollectionIcon , DownloadIcon, SpeakerphoneIcon,HomeIcon} from "@heroicons/react/outline"
import {PlusCircleIcon, HeartIcon} from "@heroicons/react/solid"
import Image from 'next/image'
import Headeritem from './Headeritem'   
import Link from 'next/link'
import React, {useState} from "react"
import data from "../pages/api/feed.json";
function Sidenav() {
    
    return (
    <div className="dark:bg-black bg-gray-100 dark:border-0 border-r-0.5 border-gray-100 hidden sm:hidden md:hidden lg:block lg:h-full lg:min-h-full lg:w-52 fixed left-0 lg:z-50"> 
    <aside className="pl-4 h-5/6">
        <div className="pr-20 pt-6 pb-4 hidden dark:block">
            <Image alt="spotify-logo" placeholder="blur" blurDataURL className="object-contain" layout="responsive" width={90} height={25} src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" />
        </div>
        <div className="pr-20 pt-6 pb-4 dark:hidden">
            <Image alt="spotify-logo" placeholder="blur" blurDataURL className="object-contain" layout="responsive" width={90} height={25} src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" />
        </div>
        <div className="flex flex-col justify-between items-start h-full">
            <div className="h-full">
                <div className="border-b dark:border-gray-800 border-gray-200  w-full">
                    <div className="icon-items">
                        <Headeritem linkTo={"/"} title="Home" Icon={HomeIcon} />                      
                        <Headeritem linkTo={"/search"}  title="Search" Icon={SearchIcon} />
                        <Headeritem linkTo={"/collection/playlists"} title="Your Library" Icon={CollectionIcon} />
                        
                    </div>

                    <div className="icon-items mt-6 w-full pb-2">
                        <Headeritem linkTo={"#"} title="Create Playlist" Icon={PlusCircleIcon} />
                        <Headeritem linkTo={"/collection/tracks"} isLike title="Liked Songs" Icon={HeartIcon} />
               
                    </div>
                </div>    
                <div>
                   {data.map((details)=>{
                     return(
                        <div key={details.id} className="flex flex-col space-y-3 text-xs pl-1 py-4 tracking-wide">
                        {details.feed.slice(0,20).map((content)=>{
                            if(content.type == "Playlist")
                            {
                            return (
                            
                                <Link passHref key={content.id}  href={`/playlist/${content.id}`}><h3 className="dark:hover:text-white dark:text-gray-300 text-gray-600 hover:text-main-bg transition-all cursor-default text-xxs">{content.name}</h3></Link>

                            
                            )
                            }else {null}
                        })}
                    </div>   

                     )
                   })}
                    
                </div>
            </div>    
            <div className="pb-8">
                <div className="cursor-pointer flex pr-6 pl-0 my-1 py-2 space-x-2 rounded-md dark:hover:text-white dark:text-gray-300 text-gray-600 hover:text-main-bg hover:font-medium transition-all duration-300"><DownloadIcon className=" w-5" /><p className="ml-4 my-auto font-semibold text-xs">Install App</p></div>
            </div>
        </div>    

    </aside>
    </div>
       
    )
}
export default Sidenav
