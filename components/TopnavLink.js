import Link from 'next/link'
import React, {useState} from 'react'
function TopnavLink({title, url, active}) {
    const [isActive, setActive]=useState(false)
    return (
        
    <div className="ml-2">
            <Link passHref href={`${url}`}><h3 onClick={()=>setActive(!isActive)} className={`font-semibold text-xxs px-3 py-2 rounded-md cursor-pointer hover:bg-card-hover text-white ${isActive ?"bg-gray-700":""}`}>{title}</h3></Link>
    </div>
        
    )
}

export default TopnavLink
