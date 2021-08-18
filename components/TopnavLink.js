import Link from 'next/link'
import React, {useState} from 'react'
function TopnavLink({title, url, active}) {
    const [isActive, setActive]=useState(false)
    return (
        
    <div className="ml-2">
            <Link href={`${url}`}><h3 onClick={()=>setActive(!isActive)} className={`font-semibold text-xs px-4 py-3 rounded-md cursor-pointer hover:bg-gray-700 text-white ${isActive ?"bg-gray-700":""}`}>{title}</h3></Link>
    </div>
        
    )
}

export default TopnavLink
