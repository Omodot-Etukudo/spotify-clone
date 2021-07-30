import React, {useState} from "react"
import OptionsDropdown from "./OptionsDropdown"
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon, UserIcon,ChevronDownIcon, CogIcon, ExternalLinkIcon} from "@heroicons/react/outline"
function Topnav({className}) {
    const [showOptions, toggleOptions] = useState(false)
    return (       
        <div className="top-0 bg-opacity-80 lg:fixed z-40 lg:z-40 left-0 lg:bg-opacity-95 px-5 lg:pl-72 w-full min-w-full h-14 lg:h-14 lg:min-h-14 lg:max-h-14 lg:bg-gray-900 absolute ">
            <div className=" w-10/12 pr-6 py-2 hidden lg:flex justify-between">
                <div className="justify-between lg:flex hidden fixed">
                    <div className="flex py-1">
                        <div className="rounded-full mr-2 hover:cursor-pointer hover:text-white transition-all duration-300 bg-black bg-opacity-70"><ChevronLeftIcon className="h-8 w-8 p-1 " /></div>
                        <div className="rounded-full ml-1 hover:cursor-pointer hover:text-white transition-all duration-300 mr-4 bg-black bg-opacity-70"><ChevronRightIcon className="h-8 w-8 p-1 " /></div>
                    </div>
                    <div><input placeholder="Artists, songs or podcasts" className={className}/></div><SearchIcon className="h-6 w-6 relative left-2 top-2 text-gray-900"/>
                </div>
                
                <div className="py-0.5 hover:cursor-pointer pr-0 mr-12 right-0 w-36 max-w-32 min-w-32 ">
                    <div className="fixed right-52">
                        <button className="bg-black bg-opacity-70 border font-bold hover:scale-105 transition-transform duration-100 px-10 py-2 text-white text-xs uppercase rounded-full">Upgrade</button>
                        
                    </div>
                    <div onClick={()=>toggleOptions(!showOptions)} className="group bg-black bg-opacity-70 fixed right-8 text-white rounded-full flex pl-0.5 py-0.5 pr-4 hover:bg-gray-700 transition-all duration-300 w-36">
                        <div className="rounded-full bg-opacity-50 px-0.5 py-0.5 mr-2 bg-gray-900"><UserIcon className="h-7 w-7 py-1 " /></div>
                        <div className="py-2"><h3 className="text-xs font-bold text-center justify-self-center">_omodot_e</h3></div>
                        <div className="py-2 px-1"><ChevronDownIcon className="h-4 w-4" /></div>
                    </div>

                    {/*OPTIONS*/}
                    
                     {
                         showOptions?<OptionsDropdown/> :null
                     }
                       
                    
                    {/*END OF OPTIONS*/}
                      
            </div>
            <div className="flex justify-end lg:hidden">
                <div className="py-2 px-2 my-4 ml-2 rounded-full bg-black bg-opacity-60 transition-all duration-300 cursor-pointer hover:text-white">
                    <CogIcon className="h-7 w-7"/>
                </div>
            </div>
           
        </div>
        </div>
        
    )
}

export default Topnav
