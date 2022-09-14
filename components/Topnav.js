import React, {useState, useEffect} from "react"
import { useRouter } from 'next/router'
import TopnavLink from "./TopnavLink"
import MobileSettingsButton from "../components/MobileSettingsButton"
import OptionsDropdown from "./OptionsDropdown"
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon, UserIcon,ChevronDownIcon, CogIcon, ExternalLinkIcon} from "@heroicons/react/outline"
function Topnav({isSearch,isCollection}) {
    const router = useRouter()
    const [showOptions, toggleOptions] = useState(false)   
    const [getScroll, setScroll] = useState(false); 
    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 100)
        })
      }, []
    )


    return (             
        <div className={`top-0 bg-opacity-80 lg:fixed lg:z-40 left-0 lg:bg-opacity-95 px-5 lg:pl-56 w-full min-w-full h-14 lg:h-14 lg:min-h-14 lg:max-h-14 ${getScroll ?"lg:dark:bg-black lg:bg-gray-200 transition-all duration-150 delay-75":"lg:bg-none"} absolute`}>
            <div className=" w-10/12 pr-6 py-2 hidden lg:flex justify-between items-start">
                <div className="lg:flex justify-center space-x-4 items-center hidden fixed">
                    <div className="flex justify-center items-center space-x-2">
                        <div className="flex justify-center items-center pt-1">
                            <div onClick={router.pathname!="/"?() => router.back():null} className={`rounded-full mr-2  ${router.pathname == "/"?"text-gray-600 cursor-not-allowed":"text-gray-400 hover:text-white hover:cursor-pointer"}   transition-all duration-300 dark:bg-black bg-gray-300 bg-opacity-70`}><ChevronLeftIcon className="h-7 w-7 p-1 " /></div>
                            <div onClick={() => router.query.from} className="rounded-full ml-1 hover:cursor-pointer text-gray-400 hover:text-white transition-all duration-300 mr-4 dark:bg-black bg-gray-300 bg-opacity-70"><ChevronRightIcon className="h-7 w-7 p-1 " /></div>
                        </div>
                        <div>
                            <input placeholder="What do you want to listen to?" className={`${isSearch?"block focus:outline-none absolute text-xxs pl-8 h-8 pr-4 py-2 rounded-full w-80 text-black font-regular":"hidden"}`}/>
                            <SearchIcon className={`${isSearch?"h-5 w-5 relative left-2 top-1.5 text-main-bg":"hidden"}`}/>
                        </div>
                    </div>
                    
                    <div className={`${isCollection?"flex justify-center items-center":"hidden"}`}>
                        <TopnavLink url="/collection/playlists" title="Playlists"/>
                        <TopnavLink url="/collection/podcasts" title="Podcasts"/>
                        <TopnavLink url="/collection/artists" title="Artists"/>
                        <TopnavLink url="/collection/albums" title="Albums"/>
                    </div>
                </div>

                
                
                <div className="py-0.5 hover:cursor-pointer pr-0 mr-12 right-0 w-36 max-w-32 min-w-32 ">
                   
                    
                    <div onClick={()=>toggleOptions(!showOptions)} className="group dark:bg-black bg-gray-300 bg-opacity-70 fixed right-4 text-white rounded-full pl-0.5 py-0.5 pr-0.5 dark:hover:bg-gray-700 hover:bg-gray-300 transition-all duration-300 w-28 flex justify-between items-center">
                        <div className="flex space-x-1 justify-center items-center">
                            <div className="rounded-full bg-opacity-50 px-0.5 py-0.5 bg-gray-900"><UserIcon className="h-6 w-6 py-1 " /></div>
                            <div className="py-1"><h3 className="text-xs font-semibold text-center justify-self-center dark:text-gray-300 text-main-bg">Omodot</h3></div>
                        </div>   
                        <div className="py-2 px-1 dark:text-gray-300 text-main-bg"><ChevronDownIcon className="h-4 w-4" /></div>
                    </div>

                    {/*OPTIONS*/}
                    
                     {
                         showOptions? (<OptionsDropdown/>) :null
                     }
                       
                    
                    {/*END OF OPTIONS*/}
                      
                </div>

                <label htmlFor="default-toggle" className="inline-flex items-center cursor-pointer my-2 relative">
                    <span className="absolute -left-10 top-1 text-xs font-semibold">Light</span>
                    <input type="checkbox" value="" id="default-toggle" className="sr-only peer"/>
                    <div className="w-11 h-6 bg-card-hover rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-spotify-green"></div>
                    <span className="absolute -right-10 top-1 text-xs font-semibold ">Dark</span>
                </label>
            
            
            </div>
            <MobileSettingsButton/>
        </div>
        
    )
}

export default Topnav
