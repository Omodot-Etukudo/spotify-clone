import Mediacard from "./Mediacard"
import {HeartIcon, PlayIcon} from "@heroicons/react/solid"
import {ClockIcon, DotsHorizontalIcon} from "@heroicons/react/outline"
import { useRouter } from "next/router";
import { BASE_URL, BASE_URL2, BASE_URL3 } from "../next.config"
import Image from "next/image"
import DefaultSongComponent from "./DefaultSongComponent"
import data from "../pages/api/feed.json";
function DefaultAlbum() {
  const router = useRouter();
  const uid = router.query.slug;
  
  
  return (
   
   data.map((items=>{
    const albumItems = items.feed.filter( subContent => subContent.id == uid)
    return albumItems,
    albumItems.map((content =>{
                     
                return (
                    
                    <div key={content.id} className="flex flex-col space-y-6 h-screen lg:h-full lg:w-full lg:pl-56 lg:pr-6 lg:max-w-full max-w-full min-w-full py-20 lg:pt-16 lg:pb-6 lg:mb-10 px-3 lg:dark:bg-main-bg bg-white">
                       <div className="w-full py-1 flex justify-start items-end space-x-6">
                            <div className=" w-48 h-48 flex justify-center items-center">
                                <Image alt="Song Name"  placeholder="blur" loading="lazy" blurDataURL width={200} height={200} className="w-full h-full shadow-xl"  src={`${BASE_URL}${content.cover}` || `${BASE_URL2}${content.cover}` || `${BASE_URL3}${content.cover}`} />
                            </div>
                            <div className="flex flex-col space-y-8 justify-end dark:text-white text-main-bg" >
                                <div className="flex flex-col space-y-2">
                                    <h3 className="uppercase text-xxs ">{content.type}</h3>
                                    {/* Split name and check length to define font size to be used for title -- use a smaller size for longer titles*/}
                                    <h1 className={`font-extrabold ${content.name.split(" ").length < 6 ? "lg:text-6xl md:text-4xl text-2xl" : "lg:text-4xl md:text-4xl text-2xl"}  `}>{content.name}</h1>
                                </div>
                                <div className="flex space-x-1 justify-start items-center  text-xxs"><p className="font-semibold">{content.creator}</p><span>&#183;</span><p>{content.year}</p><span>&#183;</span><p className="dark:text-gray-300 text-main-bg">{content.duration}</p></div>
                            </div>
                       </div>
                       <div className="flex flex-col space-y-4 justify-start items-start">
                            <div className="flex justify-start items-center space-x-4">
                                <div className={`lg:drop-shadow-2xl cursor-default rounded-full bg-spotify-green w-12 h-12 flex justify-center items-center p-2 hover:scale-110  transition-all duration-300`}>
                                    <PlayIcon aria-label="Play Music" className="w-7 h-7 text-gray-900"/>
                                </div>
                                <div>
                                    <HeartIcon className={`w-10 h-10 ${content.isLiked ?"text-spotify-green":"dark:text-card-hover text-gray-300"} `} />
                                </div>
                                <div>
                                    <DotsHorizontalIcon className="w-6 h-6 dark:text-gray-200 text-gray-700" />
                                </div>
                            </div>
                            <div className="w-full lg:pl-0 flex flex-col justify-start items-start space-y-8">
                                <table className="w-full pl-4">
                                    <thead className="uppercase border-b dark:border-card-hover border-gray-200 lg:sticky lg:top-14 dark:bg-main-bg bg-white z-10 bg-opacity-95 dark:text-gray-300 text-main-bg">
                                        <tr>
                                            <th className="font-light text-xxs pb-2 text-left pl-3 pr-5 w-6 ">#</th>
                                            <th className="font-light text-xxs pb-2 text-left lg:w-11/12">Title</th>
                                            <th className="font-light text-xxs pb-2 text-center pl-12 pr-0"><ClockIcon className="w-4 h-4"  /></th>
                                        </tr>
                                    </thead>
                                    
                                    
                                    <tbody>
                                        {content.data.map((song=>{
                                            return(
                                                <DefaultSongComponent position={content.data.indexOf(song)+1} key={song.id} isLiked={song.isLiked} artist={content.creator} picture={content.cover} title={song.name} duration={song.duration} isAlbum/>
                                            )
                                           
                                        }))}
                                        
                                    </tbody>


                                </table>
                                <p className="text-xxs dark:text-gray-300 text-main-bg">December 22, 2017</p>
                            </div>
            
                        </div> 
                        <div className="flex flex-col space-y-4 justify-start items-start w-full">
                            <div className="flex flex-row justify-between items-center w-full"><h2 className="dark:text-white text-gray-900 text-md lg:text-lg font-semibold">More like this</h2><h3 className="text-xxs uppercase text-gray-300 hover:underline transition-all duration-150">See All</h3></div>
                            <div className="w-full flex lg:justify-start lg:space-x-3.5 md:justify-between justify-between items-center flex-wrap lg:flex-nowrap">
                                <div><Mediacard  picture="ab67616d0000b273b87ac71d440973d20f4c8473" title="Chilombo" artist="Jhené Aiko" /></div>
                                <div><Mediacard  title="After Hours" artist="The Weeknd" picture="ab67616d0000b2738863bc11d2aa12b54f5aeb36"/></div>
                                <div><Mediacard  title="Chemtrails Over The Country Club" artist="Lana Del Rey" picture="ab67616d0000b273e77203dd587322b5f2ddd3f4"/></div>
                                <div><Mediacard  title="Somewhere between beauty and magic" artist="Joeboy" picture="ab67616d00001e0234347b639c35a6e57664fb38"/></div>
                                <div><Mediacard  title="For Broken Ears" artist="Tems" picture="ab67616d00001e020ab4d3e1c0b5c5e453287a4c"/></div>
                                <div><Mediacard  title="Gospel Hits" artist="ZOZO Playlists" picture="ab67706f00000003ab13d877adafef46113954b6"/></div>
                                <div><Mediacard  title="Gospel Hits" artist="ZOZO Playlists" picture="ab67706f00000003ab13d877adafef46113954b6"/></div>
                            </div>
                        </div>
                    </div>
            
        
        
        
    )}))
   
    
    }
    ))
    )
    
}

export default DefaultAlbum
