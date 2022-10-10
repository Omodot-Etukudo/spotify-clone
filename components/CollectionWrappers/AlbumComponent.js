import Mediacard from "../Mediacard"
import data from "../../pages/api/feed.json"
function AlbumComponent() {
    
    return (
        <div className="h-screen lg:h-full lg:w-full lg:pl-56 lg:pr-6 lg:max-w-full max-w-full min-w-full py-20 lg:pt-20 lg:pb-6 lg:mb-10 px-3 lg:dark:bg-main-bg bg-white">
           
            <div className="flex flex-col space-y-8 justify-start items-start w-full">
                <div className="flex flex-row justify-start items-center w-full"><h2 className="text-white text-md lg:text-lg font-semibold">Albums</h2></div>    
                <div className="w-full flex gap-3 flex-wrap" >
                {/* Map through data from feed.json*/}
                {data.map((details)=>{
                    
                //    get all the items in feed.json and filter to get only EPs and Albums an return the items as a new array
                    const albumList = details.feed.filter(subContent => subContent.type.toLowerCase()=="album" || subContent.type.toLowerCase() =="ep")
                    return albumList,
                    //Map through the new array and push every item to a new array which would form the final array 
                    albumList.map((newItem=>{
                        const newArray=[]
                        newArray.push(newItem)
                        return newArray,
                        //map through this new array and return the media components and apply the props
                        newArray.map((content=>{
                            return(
                                
                                <Mediacard key={content.key} id={content.id} artist={content.creator} title={content.name} picture={content.cover}/>
                                
                            )
                        }))
                            
                    }))
                    
                    
                })}
                </div>        
               
                           
            </div>
        </div>
    )
}

export default AlbumComponent
