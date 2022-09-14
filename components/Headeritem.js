import Link from "next/link"
import { useRouter } from 'next/router'
function Headeritem({ title , Icon, isLike, linkTo}) {
    const router = useRouter()
    return (
        <Link passHref href={linkTo}>
            <div className={`${router.pathname == linkTo ? "dark:text-white dark:hover:text-white text-main-bg hover:text-main-bg":"dark:text-gray-400 dark:hover:text-white hover:text-gray-600 text-gray-500"} cursor-pointer flex w-full space-x-2.5 pr-6 pl-1 my-1 py-1 rounded-md hover:font-medium transition-all duration-300`}>
                
                    <div className={`${isLike ? "text-purple-700": " "}`} ><Icon className="h-5 my-auto" /></div>
                    <div className="font-semibold text-xs"><p>{title}</p></div>
                
                
            </div>
        </Link>
    )
}

export default Headeritem
