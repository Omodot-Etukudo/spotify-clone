import albumlist from "../utils/albumlist.json"
import message from "../utils/getTime"
function albums() {
    return (
        <div>
            <h1>Hello, {message}</h1>
            {albumlist.map((albumDetail)=>{
                return (
                    <div className="border-2 flex flex-col p-4" key={albumDetail.id}>
                        <h1 className="font-semibold text-base">{albumDetail.title}</h1>
                        <h1 className="font-light text-sm">{albumDetail.artist}</h1>
                        <div className="font-lighter text-white">
                            {albumDetail.songs.map((subData) =>{
                                return (
                                <div key={subData.id} className="py-2 border-t border-gray-800">
                                   <h1>{subData.title}</h1>
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
