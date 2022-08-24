
function Headeritem({ title , Icon, isLike}) {
    return (
        
        <div className="cursor-pointer flex space-x-2.5 pr-6 pl-4 my-1 py-1 rounded-md hover:text-white hover:font-medium transition-all duration-300">
            
                <div className={`${isLike ? "text-purple-800": " "}`} ><Icon className="h-5 my-auto" /></div>
                <div className="my-auto font-semibold text-xs"><p>{title}</p></div>
            
            
        </div>
    )
}

export default Headeritem
