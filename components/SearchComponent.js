import {SearchIcon, ChevronLeftIcon} from "@heroicons/react/outline"
import MediaController from "./MediaController";
import Allgenres from "./SearchComponents/Allgenres";
import allgenres from "./SearchComponents/Allgenres";
import Topgenres from "./SearchComponents/Topgenres";
function SearchComponent() {
    return (
        <div className="h-screen lg:h-full lg:pl-72 lg:max-w-full max-w-full min-w-full py-20 lg:pt-20 px-3 lg:pr-6 bg-gradient-to-b from-pink-900  via-gray-900 to-black lg:from-gray-900 lg:via-gray-900 lg:to-black">
           <div className="hidden lg:block">
               <div>
                    <div className="flex lg:mb-5 ">
                        <h1 className="text-white text-lg lg:text-2xl font-semibold">Your top genres</h1>
                    </div>
                    <div className="flex space-x-6 h-60 overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-hide">
                        <Topgenres title="R&B" image="ab67706f000000032b29b4a26e620ccd2bd2d2f8" background="cursor-pointer bg-gradient-to-r from-pink-500 via-pink-400 to-pink-400 w-96 pt-8 lg:pl-6 lg:h-52 rounded-lg" />
                        <Topgenres title="Christian and Gospel" image="ab67706f00000003c5f9db40ec3aa9a7f8db6693" background="cursor-pointer bg-gradient-to-r from-blue-500 via-blue-500 to-blue-400 w-96 pt-8 lg:pl-6 lg:h-52 rounded-lg" />
                        <Topgenres title="Hip-hop" image="ab67706f000000036c6ca524605c48d9842fec9e" background="cursor-pointer bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-600 w-96 pt-8 lg:pl-6 lg:h-52 rounded-lg" /> 
                        <Topgenres title="Pop" image="ab67706f00000003f336332699dd46ae4396e15f" background="cursor-pointer bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 w-96 pt-8 lg:pl-6 lg:h-52 rounded-lg" />
                        
                    </div>
                    
               </div>
               <div className="">
                    <div className="flex mb-5">
                        <h1 className="text-white text-lg lg:text-2xl font-semibold">Browse all</h1>
                        
                    </div>
                        <div className="flex flex-wrap">
                            <Allgenres title="Podcasts" background="w-48 h-44 rounded-lg bg-gradient-to-br from-green-700 via-green-600 to-green-500 pl-5 pt-5" image="ab6765630000ba8a67a4119f9f60a6d8336b8452" />
                            <Allgenres title="Made For You" background="w-48 h-44 rounded-lg bg-gradient-to-br from-gray-700 via-blue-900 to-blue-700 pl-5 pt-5" image="ab67616d0000b2734169ddd81ff51075abab4ac1"/>
                            <Allgenres title="Lo-Fi" background="w-48 h-44 rounded-lg bg-gradient-to-br from-gray-800 via-gray-500 to-gray-500 pl-5 pt-5" image="ab67706f000000035bfa4d6bec505c7a2634cc69"/>
                            <Allgenres title="Afro" background="w-48 h-44 rounded-lg bg-gradient-to-br from-red-900 via-red-700 to-gray-500 pl-5 pt-5" image="ab67616d00001e024f4281b156c3b060dfba5d96"/>
                            <Allgenres title="Mood Boosters" background="w-48 h-44 rounded-lg bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-300 pl-5 pt-5" image="ab67706f00000003a7c67b2368e91a3add3b91d6"/>
                            <Allgenres title="Focus" background="w-48 h-44 rounded-lg bg-gradient-to-br from-purple-900 via-purple-800 to-gray-800 pl-5 pt-5" image="ab67706f000000033e0130fcd5d106f1402b4707"/>
                            <Allgenres title="Throwback" background="w-48 h-44 rounded-lg bg-gradient-to-br from-blue-500 via-blue-300 to-gray-300 pl-5 pt-5" image="ab67706f000000032612242cb6f026ca7a274dde"/>
                            <Allgenres title="Dance & Electronic" background="w-48 h-44 rounded-lg bg-gradient-to-br from-red-900 via-pink-800 to-pink-800 pl-5 pt-5" image="ab67706f00000003470dd505fcf08e4693db9b24"/>
                            <Allgenres title="Wellness" background="w-48 h-44 rounded-lg bg-gradient-to-br from-purple-600 via-purple-500 to-red-200 pl-5 pt-5" image="ab67706f00000003ec69f78942a99131ab104df5" />
                            <Allgenres title="Latin" background="w-48 h-44 rounded-lg bg-gradient-to-br from-gray-500 via-gray-400 to-white pl-5 pt-5" image="ab67706f0000000361761ca71ae4a58e64bda477" />
                            <Allgenres title="Country" background="w-48 h-44 rounded-lg bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-100 pl-5 pt-5" image="ab67706f00000003ea0ca3b3ba1b64a98f24fc98" />
                            <Allgenres title="Blues" background="w-48 h-44 rounded-lg bg-gradient-to-br from-gray-700 via-blue-400 to-blue-300 pl-5 pt-5" image="ab67706f00000003e8d2d867e32fdaa12aa79d57" />
                            <Allgenres title="Workout" background="w-48 h-44 rounded-lg bg-gradient-to-br from-green-700 via-green-400 to-green-200 pl-5 pt-5" image="ab67706f000000039cc6891dbc9b7292361bd673" />
                        </div>
                    
                    
               </div>
            </div> 
            <div className="flex flex-col  lg:hidden">
                
                    <h1 className="text-white font-extrabold text-3xl mx-auto mt-16">Hi, _omodot_e</h1>
                    <h3 className="font-semibold text-white text-xs px-6 text-center tracking-widest mx-auto my-2 leading-5">Jump right in by searching for something you love.</h3>
                    <div className="w-full bg-white rounded-md mt-5">
                        <div className="flex flex-row justify-center py-3 space-x-1"><SearchIcon className="w-6 h-6 text-black"/><h3 className="text-black text-sm font-bold mt-0.5">Search</h3></div>
                    </div>

            </div>
            <MediaController/>
        </div>
    )
}

export default SearchComponent
