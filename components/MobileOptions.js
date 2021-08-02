import {ChevronLeftIcon} from "@heroicons/react/outline"
import React, {useState} from "react"
import Mobileoptionlink from "./Mobileoptionlink"
function MobileOptions() {
    const [showOptions, toggleOptions] = useState(true)

    return (
        <React.Fragment>
            {showOptions?
            
            (<div className="fixed px-4 w-full left-0 top-0 lg:hidden h-full bg-gradient-to-b from-purple-800 via-black to-black">
                <div className="flex h-16 ">
                    <ChevronLeftIcon onClick={()=>{toggleOptions(!showOptions)}} className="w-8 h-8 text-white my-auto"/>
                </div>
                <div className="heading py-6 w-full flex">
                    <h3 className="text-white font-extrabold text-4xl mx-auto">Settings</h3>
                    
                </div>
                <div className="flex flex-col space-y-8 mt-8">
                    <Mobileoptionlink name="View Account"/>
                    <Mobileoptionlink name="Premium"/>
                    <Mobileoptionlink name="Legal"/>
                    <Mobileoptionlink name="Terms and Conditons"/>
                </div>
                <div className="w-full flex py-8 mt-8">
                    <h3 className="text-white mx-auto text-lg font-semibold">Log Out</h3>
                </div>
            </div>)

            :null}
        </React.Fragment>
        
    )
}

export default MobileOptions
