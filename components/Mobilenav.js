import {HomeIcon , SearchIcon , CollectionIcon ,HeartIcon, PlusIcon, DownloadIcon, UserIcon} from "@heroicons/react/outline"
import Image from 'next/image'
import Link from 'next/link'
import Mobilenavitem from "./Mobilenavitem"
export default function Mobilenav() {
    return (
        <div className=" z-40 flex justify-between py-3 px-4 fixed bottom-0 w-full h-16 bg-gray-900 sm:fixed md:fixed lg:hidden">
            <Link href="/"><div className="mobile-active-link rounded-md pb-1"><Mobilenavitem className="col-span-1" title="Home" Icon={HomeIcon} /></div></Link>
            <Link href="/search"><div><Mobilenavitem className="col-span-1" title="Search" Icon={SearchIcon} /></div></Link>
            <div><Mobilenavitem className="col-span-1" title="Your Library" Icon={CollectionIcon} /></div>
            <div><Mobilenavitem className="col-span-1" title="Get App" Icon={DownloadIcon} /></div>
        </div>
    )
}
