import Image from 'next/image'
import { BASE_URL } from '../../next.config'
function Topgenres({background, image, title}) {
    return (
    <div>
        <div>
            <div className={background}>
                <div>
                    <h1 className="text-white font-extrabold text-3xl">{title}</h1>
                </div>
                <div className="rotate-12 mt-8 ml-66">
                    <Image placeholder="blur" blurDataURL className="object-contain" width={100} height={100} src={`${BASE_URL}${image}`} />
                </div>
            </div>
        </div>
        
    </div>
        
        
    )
}

export default Topgenres
