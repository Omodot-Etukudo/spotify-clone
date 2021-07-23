import {HomeIcon , SearchIcon , CollectionIcon ,HeartIcon, PlusIcon, DownloadIcon, UserIcon, LinkIcon,} from "@heroicons/react/outline"
import Image from 'next/image'
import Headeritem from './Headeritem'   
import Link from 'next/link'
import React, {useState} from "react"

function Sidenav() {
    return (
    <div className="bg-black hidden sm:hidden md:hidden lg:block lg:h-screen lg:min-h-full lg:w-64 fixed left-0 z-50"> 
        <div className="pl-2 pr-20 pt-6 pb-4">
            <Image className="object-contain" layout="responsive" width={110} height={25} src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" />
        </div>
        <div className="icon-items pr-4 pl-3">
            <Link href="/"><div className="nav-link active-link rounded-md"><Headeritem title="Home" Icon={HomeIcon} /></div></Link>
            
            <Link href="/search"><div className="nav-link rounded-md"><Headeritem title="Search" Icon={SearchIcon} /></div></Link>
            <Link href="/collection/playlists"><div className="nav-link rounded-md"><Headeritem title="Your Library" Icon={CollectionIcon} /></div></Link>
            
        </div>

        <div className="icon-items pr-4 pl-3 mt-8">
            <div className="nav-link rounded-md"><Headeritem title="Create Playlist" Icon={PlusIcon} /></div>
            <div className="nav-link rounded-md"><Headeritem title="Liked Songs" Icon={HeartIcon} /></div>
            
            <div className="px-4 mb-20"><hr className=" border-white opacity-10"/></div>
            
        </div>
        <div className="mt-20 pr-4 pl-3">
            <div className="cursor-pointer flex pr-6 pl-4 my-1 py-2 rounded-md hover:text-white hover:font-medium transition-all duration-300"><DownloadIcon className=" w-6" /><p className="ml-4 my-auto font-semibold text-sm">Install App</p></div>
            <div className="mt-10"><div className="cursor-pointer flex pr-6 my-1 py-2 rounded-md hover:text-white hover:font-regular transition-all duration-300 hover:underline"><p className="ml-4 my-auto font-light text-xs ">Privacy Policy</p></div>
            <div className="cursor-pointer flex pr-6 my-1 py-2 rounded-md hover:text-white hover:font-regular transition-all duration-300 hover:underline"><p className="ml-4 my-auto font-light text-xs ">Cookie Policy</p></div></div>
            
        </div>


    </div>
       
    )
}
export default Sidenav
