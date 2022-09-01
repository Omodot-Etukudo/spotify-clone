import {SearchIcon , CollectionIcon , DownloadIcon, SpeakerphoneIcon,HomeIcon} from "@heroicons/react/outline"
import {PlusCircleIcon, HeartIcon} from "@heroicons/react/solid"
import Image from 'next/image'
import Headeritem from './Headeritem'   
import Link from 'next/link'
import React, {useState} from "react"

function Sidenav() {
    return (
    <div className="bg-black hidden sm:hidden md:hidden lg:block lg:h-screen lg:min-h-full lg:w-52 fixed left-0 lg:z-50"> 
    <aside className="pl-4 h-5/6">
        <div className="pr-20 pt-6 pb-4">
            <Image alt="spotify-logo" placeholder="blur" blurDataURL className="object-contain" layout="responsive" width={90} height={25} src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" />
        </div>
        <div className="flex flex-col justify-between items-start h-full">
            <div className="h-full">
                <div className="border-b border-gray-800  w-full">
                    <div className="icon-items">
                        <Link passHref  href="/"><div className="nav-link rounded-md"><Headeritem title="Home" Icon={HomeIcon} /></div></Link>
                        
                        <Link passHref  href="/search"><div className="nav-link rounded-md"><Headeritem  title="Search" Icon={SearchIcon} /></div></Link>
                        <Link passHref  href="/collection/playlists"><div className="nav-link rounded-md"><Headeritem title="Your Library" Icon={CollectionIcon} /></div></Link>
                        
                    </div>

                    <div className="icon-items mt-6 w-full pb-2">
                        <div className="nav-link rounded-md"><Headeritem title="Create Playlist" Icon={PlusCircleIcon} /></div>
                        <Link passHref  href="/collection/tracks"><div className="nav-link rounded-md"><Headeritem isLike title="Liked Songs" Icon={HeartIcon} /></div></Link>
               
                    </div>
                </div>    
                <div>
                    <div className="flex flex-col space-y-3 text-xs pl-1 py-4 tracking-wide">
                        <Link passHref  href="/playlist/ishhse78w"><h3 className="hover:text-white transition-all cursor-default text-xxs">The Midnight Hour</h3></Link>
                        <Link passHref  href="/playlist/ishhse78w"><h3 className="hover:text-white transition-all cursor-default text-xxs">Your Coffee Break</h3></Link>
                        <Link passHref  href="/playlist/ishhse78w"><h3 className="hover:text-white transition-all cursor-default text-xxs">Amapiano on the rocks</h3></Link>
                        <Link passHref  href="/playlist/ishhse78w"><h3 className="hover:text-white transition-all cursor-default text-xxs">Amapiano on the rocks</h3></Link>
                    </div>
                </div>
            </div>    
            <div className="pb-8">
                <div className="cursor-pointer flex pr-6 pl-0 my-1 py-2 space-x-2 rounded-md hover:text-white hover:font-medium transition-all duration-300"><DownloadIcon className=" w-5" /><p className="ml-4 my-auto font-semibold text-xs">Install App</p></div>
            </div>
        </div>    

    </aside>
    </div>
       
    )
}
export default Sidenav
