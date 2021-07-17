import {HomeIcon , SearchIcon , CollectionIcon ,HeartIcon, PlusIcon, DownloadIcon, UserIcon} from "@heroicons/react/outline"
import Image from 'next/image'
import Mobilenavitem from "./Mobilenavitem"
export default function Mobilenav() {
    return (
        <div className=" flex justify-between py-3 px-3 fixed bottom-0 w-full h-20 bg-black sm:fixed md:fixed lg:hidden">
            <Mobilenavitem className="col-span-1" title="Home" Icon={HomeIcon} />
            <Mobilenavitem className="col-span-1" title="Search" Icon={SearchIcon} />
            <Mobilenavitem className="col-span-1" title="Library" Icon={CollectionIcon} />
            <Mobilenavitem className="col-span-1" title="Get App" Icon={DownloadIcon} />
        </div>
    )
}
