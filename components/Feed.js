import Mediacard from "./Mediacard";
import message from "../pages/utils/getTime";
function Feed() {
    return (
        <div className="h-full lg:h-full lg:pl-72 lg:max-w-full max-w-full min-w-full py-20 lg:py-20 px-3 lg:px-10 bg-gradient-to-tl from-black  via-black to-gray-700 lg:from-gray-900 lg:via-gray-900 lg:to-black bg-auto bg-fixed">
            <div>
                <h1 className="text-white text-lg lg:text-2xl font-semibold mb-10">{message}</h1>
            </div>
            <div className="lg:mb-10 mb-4">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-white text-lg lg:text-2xl font-semibold">The Best of 2021</h1>
                        <h3 className=" text-xs lg:text-sm text-gray-400 mt-1 w-full hidden lg:block">Dive into the best songs of 2021 in every genre</h3>
                    </div>
                    <div>
                        <h3 className="uppercase font-semibold cursor-pointer text-xs lg:text-sm tracking-wide hover:underline hover:text-white transition-all duration-200 lg:mt-8 mt-2 hidden lg:block">See All</h3>
                    </div>
                </div>
                <div className="lg:py-4 w-12/12 lg:w-full h-56 lg:h-72 lg:grid lg:grid-cols-5 lg:gap-6 flex lg:space-x-0 space-x-5 lg:overflow-x-hidden overflow-y-hidden  overflow-x-scroll whitespace-nowrap lg:last:pr-0 last:pr-4 scrollbar-hide">
                    <div><Mediacard year="2021" picture="ab67616d0000b273b87ac71d440973d20f4c8473" title="Chilombo" artist="Jhené Aiko" /></div>
                    <div><Mediacard year="2020" title="After Hours" artist="The Weeknd" picture="ab67616d0000b2738863bc11d2aa12b54f5aeb36"/></div>
                    <div><Mediacard year="2021" title="Chemtrails Over The Country Club" artist="Lana Del Rey" picture="ab67616d0000b273e77203dd587322b5f2ddd3f4"/></div>
                    <div><Mediacard year="2020" title="Somewhere between beauty and magic" artist="Joeboy" picture="ab67616d00001e0234347b639c35a6e57664fb38"/></div>
                    <div><Mediacard year="2021" title="For Broken Ears" artist="Tems" picture="ab67616d00001e020ab4d3e1c0b5c5e453287a4c"/></div>
                    
                </div>
                
            </div>
            <div className="lg:mb-10 mb-4">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-white text-lg lg:text-2xl font-semibold">Gospel Hits</h1>
                        <h3 className=" text-xs lg:text-sm text-gray-400 mt-1 w-full hidden lg:block">New songs from some of the latest and greatest Gospel music artists</h3>
                    </div>
                    <div>
                        <h3 className="uppercase font-semibold cursor-pointer text-xs lg:text-sm tracking-wide hover:underline hover:text-white transition-all duration-200 lg:mt-8 mt-2 hidden lg:block">See All</h3>
                    </div>
                </div>
                <div className="lg:py-4 w-12/12 lg:w-full h-56 lg:h-72 lg:grid lg:grid-cols-5 lg:gap-6 flex lg:space-x-0 space-x-5 lg:overflow-x-hidden overflow-y-hidden  overflow-x-scroll whitespace-nowrap lg:last:pr-0 last:pr-4 scrollbar-hide">
                    <div><Mediacard year="2021" picture="ab67706f000000035f43d01047b6589fc28b71eb" title="Fresh Gospel" artist="Jason Nelson & Others" /></div>
                    <div><Mediacard year="2021" title="Gospel Hits" artist="ZOZO Playlists" picture="ab67706c0000bebbe4a06a56f1ad47ddaa24f001"/></div>
                    <div><Mediacard year="2020" title="The Gospel of the kingdom" artist="Dunsin Oyekan" picture="ab67616d0000b2735fc41bf3e81456825c6f9a69"/></div>
                    <div><Mediacard year="2019" title="Top Christian presents: Best Christian and Gospel songs of 2019" artist="Spotify Music Editors" picture="ab67706f0000000371093b415750202c3dbf2050"/></div>
                    <div><Mediacard year="2020" title="Christian Afrobeat" artist="Gospel Hydration" picture="ab67706c0000bebb409b0f2627670ae4570352c2"/></div>
                </div>
                
            </div>
            <div className="lg:mb-10 mb-4">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-white text-lg lg:text-2xl font-semibold">The Year in Podcasts</h1>
                        <h3 className=" text-xs lg:text-sm text-gray-400 mt-1 w-full hidden lg:block">Our favourite podcasts this year</h3>
                    </div>
                    <div>
                        <h3 className="uppercase font-semibold cursor-pointer text-xs lg:text-sm tracking-wide hover:underline hover:text-white transition-all duration-200 lg:mt-8 mt-2 hidden lg:block ">See All</h3>
                    </div>
                </div>
                <div className="lg:py-4 w-12/12 lg:w-full h-56 lg:h-72 lg:grid lg:grid-cols-5 lg:gap-6 flex lg:space-x-0 space-x-5 lg:overflow-x-hidden overflow-y-hidden overflow-x-scroll whitespace-nowrap lg:last:pr-0 last:pr-4 scrollbar-hide">
                    <div><Mediacard year="2021" picture="ab6765630000ba8a67a4119f9f60a6d8336b8452" title="I Said What I Said" artist="FK and Jollz" /></div>
                    <div><Mediacard year="2021" title="The Daily Show" artist="Trevor Noah" picture="ab6765630000ba8aaea6ade0ec380e248ed00f1e"/></div>
                    <div><Mediacard year="2021" title="So Nigerian" artist="Dami Aros" picture="04fea5127aac7c43cba3ed4833a6830768fb3887"/></div>
                    <div><Mediacard year="2021" title="Joel Osteen Daily Podcast" artist="Joel Osteen" picture="ab6765630000ba8a43cf4cdb05ebfcdaf63820df"/></div>
                    <div><Mediacard year="2021" title="Jesus and Jollof" artist="Luvvie Ajayi & Yvonne Orji" picture="ab6765630000ba8a324ce3f659ac5434c61c8186"/></div>
                </div>
                
            </div>
            
            
            
        </div>
    )
}

export default Feed
