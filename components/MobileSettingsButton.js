import React, {useState} from "react"
import MobileOptions from "./MobileOptions"
import { CogIcon} from "@heroicons/react/outline"
function MobileSettingsButton() {
    const [showOptions, toggleOptions] = useState(false)
    return (
        <div>
            <div className="flex justify-end lg:hidden ">
                    <div onClick={()=>{toggleOptions(!showOptions)}} className="py-2 px-2 my-4 ml-2 rounded-full bg-black bg-opacity-60 transition-all duration-300 cursor-pointer hover:text-white">
                        <CogIcon className="h-7 w-7"/>
                    </div>
            </div>

            {
                showOptions? (<MobileOptions/>) :null
            }
        </div>
    )
}
export default MobileSettingsButton
