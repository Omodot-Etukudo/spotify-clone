import ArtistCard from "../ArtistCard"

function ArtistComponent() {
    return (
       
        <div className="h-screen lg:h-screen lg:w-full lg:pl-56 lg:pr-6 lg:max-w-full max-w-full min-w-full py-20 lg:pt-20 lg:pb-60 lg:mb-40 px-3 lg:bg-main-bg">
           
            <div className="flex flex-col space-y-4 justify-start items-start w-full">
                <div className="flex flex-row justify-start items-center w-full"><h2 className="text-white text-md lg:text-lg font-semibold">Artists</h2></div>
                <div className="w-full flex gap-3 flex-wrap">
                    <ArtistCard name="Bazzi" picture="ab6761610000e5eb335e53b32dfd6e33fef91466" />
                    <ArtistCard name="Burna Boy" picture="ab6761610000e5eba0e4780f120345edddeaada9" />
                    <ArtistCard name="Jack Harlow" picture="ab6761610000e5ebed3a04c76cbc92b97f59c3c0" />                
                    <ArtistCard name="Vance Joy" picture="ab6761610000e5eb8f074ec8c25406680bf26422" />                 
                    <ArtistCard name="Lord Huron" picture="ab6761610000e5eb1d4e4e7e3c5d8fa494fc5f10" />
                    <ArtistCard name="Tems" picture="ab6761610000e5eb1d3357f91de16a31b194ed32" />                  
                    <ArtistCard name="Wizkid" picture="ab6761610000e5eb9050b61368975fda051cdc06" />
                    <ArtistCard name="Dami Oniru" picture="ab6761610000e5eb055a1711d7dabf27e4d365ee" />
                    <ArtistCard name="Daramola" picture="ab6761610000e5eb8e0307594179f63912428723" />               
                    <ArtistCard name="Bastille" picture="ab6761610000e5ebfb7a0fe5a0e33cf5325fcd91" />
                    <ArtistCard name="Coldplay" picture="ab6761610000e5eb865a3301762a8fce048cb469" />             
                    <ArtistCard name="Khalid" picture="ab6761610000e5eb31072db9da0311ecfabe96bf" />
                    <ArtistCard name="Chance the rapper" picture="ab6761610000e5ebef7b862a9407492169432f88" />
                   
                    
                </div>
                
            </div>
        </div>
        
    )
}

export default ArtistComponent
