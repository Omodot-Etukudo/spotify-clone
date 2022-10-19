import Image from 'next/image'
import { BASE_URL } from '../../next.config'
function Topgenres({background, image, title}) {
    return (
    <div>
        <div>
            <div className={`w-96 py-5 lg:pl-4 lg:h-48 rounded-lg overflow-hidden relative ${background} `}>
                <div>
                    <h1 className="text-white font-extrabold text-3xl">{title}</h1>
                </div>
                <div className="rotate-45 absolute  -bottom-3 -right-3 shadow-2xl w-24 h-24">
                    <Image placeholder="blur" blurDataURL className="object-contain w-full h-full" width={95} height={97} alt={`${title}`} src={`${BASE_URL}${image}`} />
                </div>
            </div>
        </div>
        
    </div>
        
        
    )
}

export default Topgenres
