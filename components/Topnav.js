import { ChevronLeftIcon, ChevronRightIcon, SearchIcon, UserIcon,ChevronDownIcon, CogIcon, ExternalLinkIcon} from "@heroicons/react/outline"
function Topnav() {
    return (
        <div className="fixed top-0 left-0 lg:bg-gray-800 bg-opacity-30 px-5 lg:pl-72 w-full min-w-full h-14 lg:h-14 lg:min-h-14 lg:max-h-14">
            <div className=" w-10/12 pr-6 py-2 hidden lg:flex justify-between">
                <div className="justify-between lg:flex hidden">
                    <div className="flex py-1">
                        <div className="rounded-full mr-2 hover:cursor-pointer hover:text-white transition-all duration-300 bg-black bg-opacity-70"><ChevronLeftIcon className="h-8 w-8 p-1 " /></div>
                        <div className="rounded-full ml-1 hover:cursor-pointer hover:text-white transition-all duration-300 mr-4 bg-black bg-opacity-70"><ChevronRightIcon className="h-8 w-8 p-1 " /></div>
                    </div>
                    <div><input placeholder="Artists, songs or podcasts" className=" focus:outline-none absolute text-xs pl-10 h-10 pr-4 py-2 rounded-full w-80 text-black font-regular"/></div><SearchIcon className="h-6 w-6 relative left-2 top-2 text-black"/>
                </div>
                
                <div className="py-0.5 hover:cursor-pointer pr-0 mr-12 right-0 absolute w-36 max-w-32 min-w-32">
                    <div className="bg-black bg-opacity-70 h-full text-white rounded-full flex pl-0.5 py-0.5 pr-4 hover:bg-gray-700 transition-all duration-300 w-36">
                        <div className="rounded-full bg-opacity-50 px-0.5 py-0.5 mr-2 bg-gray-800"><UserIcon className="h-7 w-7 py-1 " /></div>
                        <div className="py-2"><h3 className="text-xs font-semibold text-center justify-self-center">_omodot_e</h3></div>
                        <div className="py-2 px-1"><ChevronDownIcon className="h-4 w-4" /></div>
                    </div>
                    <div className="bg-black bg-opacity-70 w-56 relative top-1 right-20 rounded p-1 dropdown-disabled shadow-2xl">
                        <div className="flex flex-col">
                            <div className="hover:bg-gray-900 hover:text-white rounded flex justify-between px-3 py-2">                               
                                <div className="my-1"><h3 className="text-xs font-semibold tracking-wide">Account</h3></div>
                                <div className="py-0.5"><ExternalLinkIcon className="w-5 h-5" /></div>
                            </div>
                            <div className="hover:bg-gray-900 hover:text-white rounded flex justify-between px-3 py-2">                               
                                <div className="my-1"><h3 className="text-xs font-semibold tracking-wide">Profile</h3></div>
                            </div>
                            <div className="hover:bg-gray-900 hover:text-white rounded flex justify-between px-3 py-2">                               
                                <div className="my-1"><h3 className="text-xs font-semibold tracking-wide">Upgrade to Premium</h3></div>
                                <div className="py-0.5"><ExternalLinkIcon className="w-5 h-5" /></div>
                            </div>
                            <div className="hover:bg-gray-900 hover:text-white rounded flex justify-between px-3 py-2">                               
                                <div className="my-1"><h3 className="text-xs font-semibold tracking-wide">Log out</h3></div>
                            </div>

                            </div>
                        </div>  
                </div> 
                 
                      
            </div>
            <div className="flex justify-end lg:hidden">
                <div className="py-2 px-2 my-4 ml-2 rounded-full bg-black bg-opacity-60 transition-all duration-300 cursor-pointer hover:text-white">
                    <CogIcon className="h-7 w-7"/>
                </div>
            </div>
           
        </div>
    )
}

export default Topnav
