import Image from 'next/image'
import { BASE_URL, BASE_URL2 } from "../next.config"
function MediaTileBig() {
    return (
        <div>
            <div className="lg:fixed left-0 bottom-20 lg:z-50"><Image width={255} height={250} src={`${BASE_URL}${"ab67616d0000b27327b8470985bb498d4fd8cee3"}`}></Image></div>
        </div>
    )
}

export default MediaTileBig
