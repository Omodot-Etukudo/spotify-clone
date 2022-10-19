import { PlayIcon} from "@heroicons/react/solid"
import Image from 'next/image'
import Link from "next/link"
import { BASE_URL, BASE_URL2 } from "../next.config"

function ShortcutMedia({picture, title, isPlaying, progress, isNew, isPodcast, artist, id}) {
    return (
        <Link key={id} passHref href={ isPodcast?`show/${id}`:`playlist/${id}`} >
            <div title={title} className="dark:bg-gray-900 dark:hover:bg-card-hover  bg-blue-100 hover:bg-gray-300  w-96 rounded-md group h-16 flex space-x-4 pr-0 transition-call duration-500 cursor-pointer shadow-2xl drop-shadow-2xl">
                <div className=" h-full max-h-full">
                    <Image  placeholder="blur" blurDataURL loading="lazy" className="rounded-l-md h-full" width={60} height={64} alt={`${title}`} src={`${BASE_URL}${picture}` || `${BASE_URL2}${picture}`}/>
                </div>
                <div className="flex justify-between items-center w-9/12">
                    <div className="my-auto flex flex-col space-y-2 justify-start items-start">
                        <div className="flex flex-row justify-center items-center gap-1.5">
                            <div className={`${isNew ? "w-1.5 h-1.5 bg-blue-600 rounded-full block":"hidden"}`}></div><h3 className="font-semibold dark:text-gray-100 text-main-bg text-xs w-56">{title}</h3>
                        </div>
                        <div className={ `${isPlaying? "w-1/2 bg-gray-700 h-1 rounded-full flex justify-start items-start": " hidden "}`} >
                            <div className={`w-${progress} h-full bg-white rounded-full`} ></div>
                        </div>
                    </div>
                    
                    <div className="h-10 p-2 cursor-default bg-spotify-green drop-shadow-2xl shadow-2xl rounded-full group-hover:block hidden hover:scale-110 transition-all duration-150"><PlayIcon className="w-6 h-6 text-gray-900"/></div>
                </div>
            </div>
        </Link>
    )
}

export default ShortcutMedia
