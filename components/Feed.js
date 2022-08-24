import Mediacard from "./Mediacard";
import ShortcutMedia from "./ShortcutMedia";
import greeting from "/getTime";
function Feed() {
    return (
        <div className="h-full lg:h-full lg:pl-56 lg:max-w-full max-w-full min-w-full py-20 lg:py-20 px-3 lg:px-6 lg:from-gray-900 lg:via-gray-900 lg:to-black bg-auto bg-fixed">
            <div className="lg:mb-10 lg:flex lg:flex-col lg:space-y-6 hidden">
                <h1 className="text-white text-md lg:text-2xl font-semibold">{greeting}</h1>
                <div className="flex flex-wrap gap-3.5">
                    <ShortcutMedia title="New Lagos Vibe feat. Show Dem Camp" picture="ab67616d00001e02fdd6a725813be0058fdb90a5"/>
                    <ShortcutMedia title="Jubilee Juneteenth Edition" picture="ab67616d0000b2732ed45ea1c204bb155e363e39"/>
                    <ShortcutMedia title="Everyday Favorites" picture="ab67706f000000030c393859070362b66bcfd973"/>
                    <ShortcutMedia title="Be Lifted" picture="ab67706f00000003c013947496a63419afb56975"/>
                    <ShortcutMedia title="Traffic jam Naija" picture="ab67706f000000031a6672f7d6e8d1533efe714f"/>
                    <ShortcutMedia title="Hot Nigerian Hits" picture="ab67706f000000038a297f39f7abf2ed223335ba"/>
                </div>
            </div>
            
            <div className="flex flex-col justify-start items-start w-full">
                <div className="flex flex-col space-y-4 justify-start items-start w-full">
                    <div className="flex flex-row justify-between items-center w-full"><h2 className="text-white text-md lg:text-xl font-semibold">Recently Played</h2><h3 className="text-xs uppercase text-gray-300 hover:underline transition-all duration-150">See All</h3></div>
                    <div className="w-full flex space-x-3.5">
                        <div><Mediacard year="2021" picture="ab67616d0000b273b87ac71d440973d20f4c8473" title="Chilombo" artist="Jhené Aiko" /></div>
                        <div><Mediacard year="2020" title="After Hours" artist="The Weeknd" picture="ab67616d0000b2738863bc11d2aa12b54f5aeb36"/></div>
                        <div><Mediacard year="2021" title="Chemtrails Over The Country Club" artist="Lana Del Rey" picture="ab67616d0000b273e77203dd587322b5f2ddd3f4"/></div>
                        <div><Mediacard year="2020" title="Somewhere between beauty and magic" artist="Joeboy" picture="ab67616d00001e0234347b639c35a6e57664fb38"/></div>
                        <div><Mediacard year="2021" title="For Broken Ears" artist="Tems" picture="ab67616d00001e020ab4d3e1c0b5c5e453287a4c"/></div>
                        <div><Mediacard year="2021" title="Gospel Hits" artist="ZOZO Playlists" picture="ab67706f00000003ab13d877adafef46113954b6"/></div>
                        <div><Mediacard year="2021" title="Gospel Hits" artist="ZOZO Playlists" picture="ab67706f00000003ab13d877adafef46113954b6"/></div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 justify-start items-start w-full">
                    <div className="flex flex-row justify-between items-center w-full"><h2 className="text-white text-md lg:text-xl font-semibold">Jump back in</h2><h3 className="text-xs uppercase text-gray-300 hover:underline transition-all duration-150">See All</h3></div>
                    <div className="w-full flex space-x-3.5">
                    <div><Mediacard year="2021" picture="ab67706f000000035f43d01047b6589fc28b71eb" title="Fresh Gospel" artist="Jason Nelson & Others" /></div>
                    <div><Mediacard year="2021" title="Gospel Hits" artist="ZOZO Playlists" picture="ab67706f00000003ab13d877adafef46113954b6"/></div>         
                    <div><Mediacard year="2020" title="The Gospel of the kingdom" artist="Dunsin Oyekan" picture="ab67616d0000b2735fc41bf3e81456825c6f9a69"/></div>
                    <div><Mediacard year="2019" title="Top Christian presents: Best Christian and Gospel songs of 2019" artist="Spotify Music Editors" picture="ab67706f0000000371093b415750202c3dbf2050"/></div>
                    <div><Mediacard year="2020" title="Christian Afrobeat" artist="Gospel Hydration" picture="ab67706c0000bebbf72573d22db660244046d7f8"/></div>
                    <div><Mediacard year="2020" title="Christian Afrobeat" artist="Gospel Hydration" picture="ab67706c0000bebbf72573d22db660244046d7f8"/></div>
                    <div><Mediacard year="2020" title="The Gospel of the kingdom" artist="Dunsin Oyekan" picture="ab67616d0000b2735fc41bf3e81456825c6f9a69"/></div>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Feed
