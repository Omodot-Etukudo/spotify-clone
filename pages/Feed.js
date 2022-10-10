import Footer from "../components/Footer";
import Mediacard from "../components/Mediacard";
import ArtistCard from "../components/ArtistCard"
import ShortcutMedia from "../components/ShortcutMedia";
import Topnav from "../components/Topnav";
import greeting from "/getTime";
import data from "../pages/api/feed.json";
function Feed() {
    const content = []
    return (
        <div className="h-full lg:pl-56 lg:max-w-full max-w-full min-w-full py-20 lg:py-20 px-3 lg:px-6  bg-auto bg-fixed">
            <Topnav/>
            <div className="lg:flex lg:flex-col lg:space-y-6 hidden">
                        <h1 className="dark:text-white text-main-bg text-md lg:text-2xl font-semibold">{greeting}</h1>
                {/* Loop through data in feed.json */}
                {data.map((details)=>{
                    return(
                        
                        <div key={content.id} className="flex flex-wrap gap-3.5">
                         {/* Loop through content in details, reverse to LIFO structure and slice array to limit */}   
                         {details.feed.reverse().slice(0,6).map((content)=>{

                                    
                                    // Check for content type to only keep playlists and podcasts

                                    if(content.type == "Playlist" || content.type == "Podcast"){

                                        return(
                                            <ShortcutMedia  id={content.id} isNew={content.isNew} title={content.name} isPlaying= {content.isPlaying} progress={content.progress} picture={content.cover} isPodcast={content.type=="Podcast"?true:false} artist={content.creator} />
                                        )
                                    } 

                         })}
                    
                        </div>
                        
                    )
                }
                
                )}
                
            </div>
            
            <div className="flex flex-col justify-start space-y-8 items-start w-full">
                <div className="flex flex-col space-y-8 justify-start items-start w-full">
                    
                    {/* Map through feed.json file and instantiate objects{id} */}
                    {data.map((details)=>{
                        return(
                            <div key={details.id} className="w-full flex flex-col space-y-4">
                                <div className="flex flex-row justify-between items-center w-full"><h2 className="dark:text-white text-main-bg text-md lg:text-xl font-semibold">{details.heading}</h2><h3 className="text-xxs uppercase dark:text-gray-300 text-gray-700 hover:underline transition-all duration-150">See All</h3></div>
                                <div className="w-full flex flex-row lg:justify-start lg:space-x-3.5 md:justify-between justify-between items-center flex-wrap lg:flex-nowrap">
                                
                                {/* Map through objects, slice array to limit items to 6 and instantiate data{id} */}
                                {details.feed.slice(0,7).map((content)=>{

                                {/* Check for the content type to conditionally assign components */}   
                                if(content.type != "Artist"){
                                    return(                                                                           
                                        <Mediacard key={content.id} id={content.id} isPodcast={content.type== "Podcast" ? true : false} picture={content.cover} artist={content.creator} title={content.name}  />                       
                                    ) 
                                } 
                                // Return artist component based on condition above
                                else {
                                    return(                                                         
                                        <ArtistCard key={content.id} id={content.id} picture={content.cover} name={content.creator}/>                                           
                                    ) 
                                }                                 
                                })}
                                </div>
                            </div>
                        )
                    })}                 
                </div>           
            </div>           
        </div>
    )
}

export default Feed
