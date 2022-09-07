function Tab({title, isActive}) {
    return (
       
        <div className={`cursor-pointer flex justify-center items-center px-3 py-1 rounded-full text-xxs font-normal ${isActive? "bg-white text-main-bg":"bg-card-hover text-gray-300"}`}>
            <p>{title}</p>
        </div>
      
    )
}

export default Tab
