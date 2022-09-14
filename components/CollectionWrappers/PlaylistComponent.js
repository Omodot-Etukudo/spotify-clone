import PrimaryButton from "../../components/PrimaryButton"
import {MusicNoteIcon} from "@heroicons/react/outline"
import Mediacard from "../Mediacard"
import LikedSongs from "../LikedSongs"
import Footer from "../Footer"
function PlaylistComponent() {
    return (
        <div className="h-screen lg:h-full lg:w-full lg:pl-56 lg:pr-6 lg:max-w-full max-w-full min-w-full py-20 lg:pt-20 lg:pb-6 lg:mb-10 px-3 lg:dark:bg-main-bg bg-white">
           
            <div className="flex flex-col space-y-4 justify-start items-start w-full">
                <div className="flex flex-row justify-start items-center w-full"><h2 className="text-white text-md lg:text-lg font-semibold">Playlists</h2></div>
                <div className="w-full flex gap-3 flex-wrap">
                    <LikedSongs/>
                    <Mediacard isplaylist picture="ab67706c0000bebb97b3a89d524422015f981265" title="Hit Rewind" artist="Listen to all the tracks you've been missing" />
                    <Mediacard isplaylist picture="ab67706c0000bebbd23aad463cc52a4fa14526ac" title="Afrobeat Chill Vibes" artist="Vibe to trendy afro music" />
                    <Mediacard isplaylist picture="ab6761610000e5ebadd503b411a712e277895c8a" title="Rap Central" artist="J Cole, NF, D Smoke, Kendrick Lamar" />
                    <Mediacard isplaylist picture="ab6761610000e5eb2c0b7791c1b134d65b587e26" title="This is Giveon" artist="Discover hidden sounds by giveon" />
                    <Mediacard isplaylist picture="ab67706c0000bebb97b3a89d524422015f981265" title="Hit Rewind" artist="Listen to all the tracks you've been missing" />
                    <Mediacard isplaylist picture="ab67706c0000bebb97b3a89d524422015f981265" title="Hit Rewind" artist="Listen to all the tracks you've been missing" />
                    <Mediacard isplaylist picture="ab67706c0000bebb97b3a89d524422015f981265" title="Hit Rewind" artist="Listen to all the tracks you've been missing" />
                    <Mediacard isplaylist picture="ab67706c0000bebb97b3a89d524422015f981265" title="Hit Rewind" artist="Listen to all the tracks you've been missing" />
                    <Mediacard isplaylist picture="ab67706c0000bebb97b3a89d524422015f981265" title="Hit Rewind" artist="Listen to all the tracks you've been missing" />
                    <Mediacard isplaylist picture="ab67706c0000bebb97b3a89d524422015f981265" title="Hit Rewind" artist="Listen to all the tracks you've been missing" />
                    <Mediacard isplaylist picture="ab67706c0000bebb97b3a89d524422015f981265" title="Hit Rewind" artist="Listen to all the tracks you've been missing" />
                    <Mediacard isplaylist picture="ab67706c0000bebbd23aad463cc52a4fa14526ac" title="Afrobeat Chill Vibes" artist="Vibe to trendy afro music" />
                    <Mediacard isplaylist picture="ab6761610000e5ebadd503b411a712e277895c8a" title="Rap Central" artist="J Cole, NF, D Smoke, Kendrick Lamar" />
                    <Mediacard isplaylist picture="ab6761610000e5eb2c0b7791c1b134d65b587e26" title="This is Giveon" artist="Discover hidden sounds by giveon" />
                    <Mediacard isplaylist picture="ab67706c0000bebb97b3a89d524422015f981265" title="Hit Rewind" artist="Listen to all the tracks you've been missing" />
                </div>
                
            </div>
            
        </div>
    )
}

export default PlaylistComponent
