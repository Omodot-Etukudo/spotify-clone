import albumlist from "../utils/albumlist.json"
import message from "../../getTime"
import Image from "next/image"
import { BASE_URL, BASE_URL2 } from "../../next.config"
function albums() {
    return (
        <div>
            <h1>Hello, {message}</h1>
                {console.log(albumlist)}
            {albumlist.map((albumDetail)=>{
                return (
                    <div className="border-2 mt-10 flex flex-col p-4" key={albumDetail.id}>
                        
                        <div className="flex space-x-2 mb-4">
                            <Image alt={`${albumDetail.title}}`} className="rounded-full justify-center" width={50} height={50} src={`${BASE_URL}${albumDetail.art}`} loading="lazy" />
                            <div className="flex-col mt-1">
                                <h1 className="font-semibold text-base">{albumDetail.title}</h1>
                                <h1 className="font-light text-sm">{albumDetail.artist}</h1>
                            </div>
                        </div>
                        


                        <div className="font-lighter text-white">
                            {albumDetail.songs.map((subData) =>{
                                return (
                                <div key={subData.id} className="py-2 border-t border-gray-800">
                                   <h1 className="font-light">{subData.title}</h1>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default albums
