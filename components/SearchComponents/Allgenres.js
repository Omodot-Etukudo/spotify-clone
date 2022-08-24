import Image from 'next/image'
import { BASE_URL } from "../../next.config"
function Allgenres({background, image, title}) {
    return (
        <div className="mb-6 mr-4 cursor-pointer">
            <div>
                <div className={`w-37 h-37 px-4 py-4 ${background}`}>
                    <h2 className="text-white font-bold text-lg  leading-6">{title}</h2>
                </div>
                <div className="rotate-12 relative -mt-23 ml-16">
                    <Image alt={`${title}`} placeholder="blur" blurDataURL className="object-contain" width={80} height={80} src={`${BASE_URL}${image}`} />
                </div>
            </div>
        </div>
    )
}

export default Allgenres
