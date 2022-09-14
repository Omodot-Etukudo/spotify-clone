import Footer from "../components/Footer";
import Mediacard from "../components/Mediacard";
import ShortcutMedia from "../components/ShortcutMedia";
import Topnav from "../components/Topnav";
import greeting from "/getTime";
function Feed() {
    return (
        <div className="h-full lg:pl-56 lg:max-w-full max-w-full min-w-full py-20 lg:py-20 px-3 lg:px-6  bg-auto bg-fixed">
            <Topnav/>
            <div className="lg:mb-10 lg:flex lg:flex-col lg:space-y-6 hidden">
                <h1 className="dark:text-white text-main-bg text-md lg:text-2xl font-semibold">{greeting}</h1>
                <div className="flex flex-wrap gap-3.5">
                    <ShortcutMedia isNew title="New Lagos Vibe feat. Show Dem Camp" picture="ab67616d00001e02fdd6a725813be0058fdb90a5"/>
                    <ShortcutMedia isPlaying progress={16} title="ISWIS SE04EP27 &#8217; The Guy &#8217; Episode ft MI Abaga" picture="ab6765630000ba8a269c9c597fca9835f921cf95"/>
                    <ShortcutMedia title="Everyday Favorites" picture="ab67706f000000030c393859070362b66bcfd973"/>
                    <ShortcutMedia title="Be Lifted" picture="ab67706f00000003c013947496a63419afb56975"/>
                    <ShortcutMedia title="Traffic jam Naija" picture="ab67706f000000031a6672f7d6e8d1533efe714f"/>
                    <ShortcutMedia isPlaying progress={8} title="So Nigerian: The 8 stages before breakfast" picture="ab6765630000ba8aa814f8f4fc997d25392037b7"/>
                    
                </div>
            </div>
            
            <div className="flex flex-col justify-start space-y-8 items-start w-full">
                <div className="flex flex-col space-y-4 justify-start items-start w-full">
                    <div className="flex flex-row justify-between items-center w-full"><h2 className="dark:text-white text-main-bg text-md lg:text-xl font-semibold">Recently Played</h2><h3 className="text-xxs uppercase dark:text-gray-300 text-gray-700 hover:underline transition-all duration-150">See All</h3></div>
                    <div className="w-full flex lg:justify-start lg:space-x-3.5 md:justify-between justify-between items-center flex-wrap lg:flex-nowrap">
                        <div><Mediacard  picture="ab67616d0000b273b87ac71d440973d20f4c8473" title="Chilombo" artist="Jhené Aiko" /></div>
                        <div><Mediacard  title="After Hours" artist="The Weeknd" picture="ab67616d0000b2738863bc11d2aa12b54f5aeb36"/></div>
                        <div><Mediacard  title="Chemtrails Over The Country Club" artist="Lana Del Rey" picture="ab67616d0000b273e77203dd587322b5f2ddd3f4"/></div>
                        <div><Mediacard  title="Somewhere between beauty and magic" artist="Joeboy" picture="ab67616d00001e0234347b639c35a6e57664fb38"/></div>
                        <div><Mediacard  title="For Broken Ears" artist="Tems" picture="ab67616d00001e020ab4d3e1c0b5c5e453287a4c"/></div>
                        <div><Mediacard  title="Gospel Hits" artist="ZOZO Playlists" picture="ab67706f00000003ab13d877adafef46113954b6"/></div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 justify-start items-start w-full">
                    <div className="flex flex-row justify-between items-center w-full"><h2 className="dark:text-white text-main-bg text-md lg:text-xl font-semibold">Jump back in</h2><h3 className="text-xxs uppercase dark:text-gray-300 text-gray-700 hover:underline transition-all duration-150">See All</h3></div>
                    <div className="w-full flex lg:justify-start lg:space-x-3.5 md:justify-between justify-between items-center flex-wrap lg:flex-nowrap">
                        <div><Mediacard  picture="ab67706f000000035f43d01047b6589fc28b71eb" title="Fresh Gospel" artist="Jason Nelson & Others" /></div>
                        <div><Mediacard  title="Gospel Hits" artist="ZOZO Playlists" picture="ab67706f00000003ab13d877adafef46113954b6"/></div>         
                        <div><Mediacard  title="The Gospel of the kingdom" artist="Dunsin Oyekan" picture="ab67616d0000b2735fc41bf3e81456825c6f9a69"/></div>
                        <div><Mediacard  title="Top Christian presents: Best Christian and Gospel songs of 2019" artist="Spotify Music Editors" picture="ab67706f0000000371093b415750202c3dbf2050"/></div>
                        <div><Mediacard  title="Christian Afrobeat" artist="Gospel Hydration" picture="ab67706c0000bebbf72573d22db660244046d7f8"/></div>
                        <div><Mediacard  title="Christian Afrobeat" artist="Gospel Hydration" picture="ab67706c0000bebbf72573d22db660244046d7f8"/></div>
                        <div><Mediacard  title="The Gospel of the kingdom" artist="Dunsin Oyekan" picture="ab67616d0000b2735fc41bf3e81456825c6f9a69"/></div>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Feed
