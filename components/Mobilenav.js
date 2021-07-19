import {HomeIcon , SearchIcon , CollectionIcon ,HeartIcon, PlusIcon, DownloadIcon, UserIcon} from "@heroicons/react/outline"
import Image from 'next/image'
import Mobilenavitem from "./Mobilenavitem"
export default function Mobilenav() {
    return (
        <div className=" flex justify-between py-2 px-4 fixed bottom-0 w-full h-16 bg-black sm:fixed md:fixed lg:hidden">
            <div className="mobile-active-link rounded-md pb-1"><Mobilenavitem className="col-span-1" title="Home" Icon={HomeIcon} /></div>
            <div><Mobilenavitem className="col-span-1" title="Search" Icon={SearchIcon} /></div>
            <div><Mobilenavitem className="col-span-1" title="Library" Icon={CollectionIcon} /></div>
            <div><Mobilenavitem className="col-span-1" title="Get App" Icon={DownloadIcon} /></div>
        </div>
    )
}
