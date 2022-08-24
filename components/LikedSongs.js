import { PlayIcon} from "@heroicons/react/solid"
function LikedSongs() {
    return (
        <div className="group bg-gradient-to-br from-purple-800 via-purple-700 to-purple-400 lg:w-85 md:w-85 w-full cursor-pointer py-5 px-4 h-54 rounded-lg">
            <div className="flex flex-col space-y-8 justify-between items-start pt-10">
                <div className="text-xs text-white flex flex-wrap gap-0.5">
                    <div className="flex space-x-1 justify-center items-center"><p>Blue Jeans</p><p className="text-gray-300">Lana del Rey</p></div>
                    <span className="font-bold block">&#183;</span>
                    <div className="flex space-x-1 justify-center items-center"><p>Saturday Sun</p><p className="text-gray-300">Vance Joy</p></div>
                    <span className="font-bold block">&#183;</span>    
                    <div className="flex space-x-1 justify-center items-center"><p>Good Times</p><p className="text-gray-300">Asa</p></div>
                    <span className="font-bold block">&#183;</span>
                    <div className="flex space-x-1 justify-center items-center"><p>Night we met</p><p className="text-gray-300">Lord Huron</p></div>
                    <span className="font-bold block">&#183;</span>
                    <div className="flex space-x-1 justify-center items-center"><p>ELLIANA</p><p className="text-gray-300">Nirvana</p></div>
                    <span className="font-bold block">&#183;</span> 
                    <div className="flex space-x-1 justify-center items-center"><p>West Coast</p><p className="text-gray-300">Lana del Rey</p></div>                    
                </div>
                <div className="flex flex-col space-y-2.5 items-start">
                    <h2 className="font-semibold text-white text-xl">Liked Songs</h2>
                    <p className="text-xs text-white">196 liked songs</p>
                </div>  
                <div className="lg:drop-shadow-2xl hidden lg:block group-hover:opacity-100 lg:z-20  group-hover:-top-20 opacity-0 cursor-default lg:relative -top-16 left-64 rounded-full bg-spotify-green w-10 h-10 p-2 hover:scale-110  transition-all duration-300">
                    <PlayIcon aria-label="Play Music" className="w-6 h-6 text-white"/>
                </div>             
            </div>
        </div>
    )
}

export default LikedSongs
