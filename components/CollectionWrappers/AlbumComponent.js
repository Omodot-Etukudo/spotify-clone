import Mediacard from "../Mediacard"
import data from "../../pages/api/feed.json"
import ArtistCard from "../ArtistCard";
import LikedSongs from "../LikedSongs"
import Topnav from "../Topnav"
function AlbumComponent() {
    
    return (
        <div className="h-screen lg:h-full lg:w-full lg:pl-56 lg:pr-6 lg:max-w-full max-w-full min-w-full py-20 lg:pt-20 lg:pb-6 lg:mb-10 px-3 lg:dark:bg-main-bg bg-white">
           
            <div className="flex flex-col space-y-4 justify-start items-start w-full">
                <div className="flex flex-row justify-start items-center w-full"><h2 className="text-white text-md lg:text-lg font-semibold">Albums</h2></div>    
                
                {data.map((details)=>{
                    return (
                        <div className="w-full flex gap-3 flex-wrap" key={details.id} >
                            {details.feed.map((content)=>{
                                
                                if(content.type.toLowerCase() == "album" || content.type.toLowerCase() == "ep")
                                
                                {
                                    const newArray =[{...content}]
                                    
                                    {newArray.map((newContent)=>{
                                           
                                       <div></div>
                                        

                                    })}
                                   
                                }
                                else{null}
                            })}
                        </div>
                    )
                })}
                           
            </div>
        </div>
    )
}

export default AlbumComponent
