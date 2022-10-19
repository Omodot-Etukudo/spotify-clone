import Image from 'next/image'
import { BASE_URL } from "../../next.config"
function Allgenres({background, image, title}) {
    return (
        <div className="cursor-pointer relative overflow-hidden rounded-md">
            <div>
                <div className={`w-37 h-37 px-4 py-4 ${background}`}>
                    <h2 className="text-white font-bold text-lg  leading-6">{title}</h2>
                </div>
                <div className=" rotate-45 absolute -right-3 -bottom-3 shadow-2xl w-20 h-20">
                    <Image alt={`${title}`} placeholder="blur" blurDataURL className="object-contain" width={80} height={80} src={`${BASE_URL}${image}`} />
                </div>
            </div>
        </div>
    )
}

export default Allgenres
