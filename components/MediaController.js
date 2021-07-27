import { HeartIcon, ArrowsExpandIcon} from "@heroicons/react/outline"
import Image from 'next/image'
import { BASE_URL, BASE_URL2 } from "../next.config"
function MediaController() {
    return (
        <div>
            <div className="w-full left-0 z-50 bg-gray-900 border-t lg:border-b-0 border-b border-gray-800 lg:py-2 py-4 fixed lg:bottom-0 bottom-14">
                <div className="hidden lg:flex flex-row justify-between px-6">
                    <div className="w-72 mt-2">
                        <div className=" flex flex-row space-x-4">
                            <div>
                                <Image className="rounded-sm shadow-2xl" src={`${BASE_URL}${"ab67616d00001e02f0339dfe2f66f076738d7a99"}`} width={60} height={60} loading="lazy"></Image>
                            </div>
                            <div className="flex flex-col my-auto">
                                <h3 className="text-white text-sm">Murder in the Usa</h3>
                                <h3 className="font-light mb-2 text-xs">Asa</h3>
                            </div>
                            <div className="flex flex-row space-x-2 my-auto">
                               <HeartIcon className="w-5 h-5 ml-4 hover:text-white transition-colors duration-300" />
                               <ArrowsExpandIcon className="w-5 h-5 hover:text-white transition-colors duration-300"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-72 border"></div>
                    <div className="w-72 border"></div>
                </div>
            </div>
        </div>
    )
}

export default MediaController
