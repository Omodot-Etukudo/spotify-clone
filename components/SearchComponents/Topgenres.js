import Image from 'next/image'
import { BASE_URL } from '../../next.config'
function Topgenres({background, image, title}) {
    return (
    <div>
        <div>
            <div className={`w-96 py-5 lg:pl-4 lg:h-48 rounded-lg ${background} `}>
                <div>
                    <h1 className="text-white font-extrabold text-3xl">{title}</h1>
                </div>
                <div className="rotate-12  relative -bottom-16 -right-64 ">
                    <Image placeholder="blur" blurDataURL className="object-contain bg-clip-content " width={90} height={90} alt={`${title}`} src={`${BASE_URL}${image}`} />
                </div>
            </div>
        </div>
        
    </div>
        
        
    )
}

export default Topgenres
