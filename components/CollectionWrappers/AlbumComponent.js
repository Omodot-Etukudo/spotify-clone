import PrimaryButton from "../../components/PrimaryButton"
import {MusicNoteIcon} from "@heroicons/react/outline"
import Mediacard from "../Mediacard"
import LikedSongs from "../LikedSongs"
import Topnav from "../Topnav"
function AlbumComponent() {
    return (
        <div className="h-screen lg:h-screen lg:w-full lg:pl-56 lg:pr-6 lg:max-w-full max-w-full min-w-full py-20 lg:pt-20 lg:pb-60 lg:mb-40 px-3 lg:bg-main-bg">
           
            <div className="flex flex-col space-y-4 justify-start items-start w-full">
                <div className="flex flex-row justify-start items-center w-full"><h2 className="text-white text-md lg:text-lg font-semibold">Albums</h2></div>
                <div className="w-full flex gap-3 flex-wrap">
                    <Mediacard  picture="ab67616d0000b273b87ac71d440973d20f4c8473" title="Chilombo" artist="Jhené Aiko" />
                    <Mediacard  title="After Hours" artist="The Weeknd" picture="ab67616d0000b2738863bc11d2aa12b54f5aeb36"/>
                    <Mediacard  title="Chemtrails Over The Country Club" artist="Lana Del Rey" picture="ab67616d0000b273e77203dd587322b5f2ddd3f4"/>
                    <Mediacard  title="Somewhere between beauty and magic" artist="Joeboy" picture="ab67616d00001e0234347b639c35a6e57664fb38"/>
                    <Mediacard  title="For Broken Ears" artist="Tems" picture="ab67616d00001e020ab4d3e1c0b5c5e453287a4c"/>
                    <Mediacard  title="Empires" artist="Hillsong UNITED" picture="ab67616d0000b2734b1994a9fab9174c67ce6039"/>
                    <Mediacard  title="Worry<" artist="Tim Lyre" picture="ab67616d00001e021ca4004ae5dda475d30e8eb7"/>
                    <Mediacard  title="Music of The Sphere" artist="Coldplay" picture="ab67616d0000b273ec10f247b100da1ce0d80b6d"/>
                    
                </div>
            </div>
        </div>
    )
}

export default AlbumComponent
