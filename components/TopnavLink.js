import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useState} from 'react'
function TopnavLink({title, url, active}) {
    const [isActive, setActive]=useState(false)
    const router = useRouter();
    return (
        
    <div className="ml-2">
            <Link passHref href={`${url}`}><h3 className={`font-semibold text-xxs px-3 py-2 rounded-md cursor-pointer hover:bg-card-hover ${router.pathname === url ? "bg-card-hover text-white":null}`}>{title}</h3></Link>
    </div>
        
    )
}

export default TopnavLink
