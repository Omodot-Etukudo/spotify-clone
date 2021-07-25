import Image from 'next/image'
import { BASE_URL } from "../../next.config"
function Allgenres({background, image, title}) {
    return (
        <div className="mb-6 mr-4 cursor-pointer">
            <div>
                <div className={background}>
                    <h1 className="text-white font-extrabold text-2xl pr-8 leading-6">{title}</h1>
                </div>
                <div className="rotate-12 -mt-31 ml-24">
                    <Image placeholder="blur" blurDataURL className="object-contain" width={85} height={85} src={`${BASE_URL}${image}`} />
                </div>
            </div>
        </div>
    )
}

export default Allgenres
