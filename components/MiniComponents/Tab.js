function Tab({title, isActive}) {
    return (
       
        <div className={`cursor-pointer flex justify-center items-center px-3 py-1 rounded-full text-xxs font-normal ${isActive? "dark:bg-white bg-gray-300 text-main-bg":"dark:bg-card-hover bg-gray-100 dark:text-gray-300 text-gray-500"}`}>
            <p>{title}</p>
        </div>
      
    )
}

export default Tab
