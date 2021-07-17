function Headeritem({ title , Icon}) {
    return (
        <div className="cursor-pointer flex pr-6 pl-4 my-1 py-2 rounded-md hover:text-white hover:font-medium transition-all duration-300">
            <div ><Icon className="h-6 my-auto" /></div>
            <div className="ml-4 my-auto font-semibold text-sm"><p>{title}</p></div>
        </div>
    )
}

export default Headeritem
