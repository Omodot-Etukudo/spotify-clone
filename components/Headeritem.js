
function Headeritem({ title , Icon}) {
    return (
        
        <div className="cursor-pointer flex space-x-2 pr-6 pl-4 my-1 py-1 rounded-md hover:text-white hover:font-medium transition-all duration-300">
            
                <div ><Icon className="h-5 my-auto" /></div>
                <div className="ml-4 my-auto font-semibold text-xs"><p>{title}</p></div>
            
            
        </div>
    )
}

export default Headeritem
