import Mediacard from "./Mediacard";

function Feed() {
    return (
        <div className="h-screen w-screen min-w-screen max-w-screen-sm lg:pl-72 lg:max-w-full min-w-full py-20 lg:py-20 px-6 lg:px-10 bg-gradient-to-b from-green-900 via-gray-900 to-black lg:from-gray-800 lg:via-gray-900 lg:to-black">
            <div >
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-white text-xl lg:text-2xl font-semibold">The Best of 2021</h1>
                        <h3 className=" text-xs lg:text-sm text-gray-400 mt-1 lg:w-full w-11/12">Dive into the best songs of 2021 in every genre</h3>
                    </div>
                    <div>
                        <h3 className="uppercase font-semibold cursor-pointer text-xs lg:text-sm tracking-wide hover:underline hover:text-white transition-all duration-200 mt-8">See All</h3>
                    </div>
                </div>
                <div className="py-4 w-12/12 lg:w-full h-56 lg:h-72 lg:grid lg:grid-cols-5 lg:gap-6 lg:overscroll-none lg:overflow-x-hidden overflow-x-auto flex flex-row flex-nowrap">
                    <div><Mediacard year="2021" picture="ab67616d0000b273b87ac71d440973d20f4c8473" title="Chilombo" artist="Jhené Aiko" /></div>
                    <div><Mediacard year="2020" title="After Hours" artist="The Weeknd" picture="ab67616d0000b2738863bc11d2aa12b54f5aeb36"/></div>
                    <div><Mediacard year="2020" title="Somewhere between beauty and magic" artist="Joeboy" picture="ab67616d00001e0234347b639c35a6e57664fb38"/></div>
                    <div><Mediacard year="2021" title="For Broken Ears" artist="Tems" picture="ab67616d00001e020ab4d3e1c0b5c5e453287a4c"/></div>
                    <div><Mediacard year="2021" title="Chemtrails Over The Country Club" artist="Lana Del Rey" picture="ab67616d0000b273e77203dd587322b5f2ddd3f4"/></div>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default Feed
