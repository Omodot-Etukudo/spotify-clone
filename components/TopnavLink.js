import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useState} from 'react'
function TopnavLink({title, url, active}) {
    const [isActive, setActive]=useState(false)
    const router = useRouter();
    return (
        
    <div className="ml-2">
            <Link passHref href={`${url}`}><h3 className={`font-semibold text-xxs px-3 py-2 rounded-md cursor-pointer dark:hover:bg-card-hover hover:bg-gray-200 ${router.pathname === url ? "dark:bg-card-hover bg-gray-300 dark:text-white text-black":"dark:text-gray-300 text-gray-600"}`}>{title}</h3></Link>
    </div>
        
    )
}

export default TopnavLink
