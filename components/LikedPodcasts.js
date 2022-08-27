import { PlayIcon} from "@heroicons/react/solid"
function LikedPodcasts() {
    return (
        <div className="flex flex-col items-start justify-end group bg-gradient-to-br from-green-900 via-green-700 to-green-400 lg:w-85 md:w-85 w-full cursor-pointer py-5 px-4 h-54 rounded-lg">
           
                <div className="flex flex-col justify-end items-start space-y-2.5 h-full">
                    <h3 className="font-semibold text-white text-xl mt-12">Your Episodes</h3>
                    <p className="text-xs text-white">0 Episodes</p>
                </div>  

                <div className="lg:drop-shadow-2xl hidden lg:flex group-hover:opacity-100 lg:z-20  group-hover:-top-2 opacity-0 cursor-default lg:relative -top-0 left-64 rounded-full bg-spotify-green w-10 h-10 p-2 hover:scale-110  transition-all duration-300">
                    <PlayIcon aria-label="Play Music" className="w-6 h-6 text-white"/>
                </div>             
            
        </div>
    )
}

export default LikedPodcasts
