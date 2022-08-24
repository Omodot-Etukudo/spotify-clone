import {ExternalLinkIcon} from "@heroicons/react/outline"
function OptionsDropdown() {
    return (
        <div className="bg-black lg:z-20 w-52 top-12 mt-1 rounded p-1 dropdown-active drop-shadow-2xl shadow-2xl fixed right-4">
            <div className="flex flex-col">
                <div className="hover:bg-gray-900 text-gray-300 rounded flex justify-between px-3 py-2">                               
                    <div className="my-1"><h3 className="text-xs  tracking-wide">Account</h3></div>
                    <div className="py-0.5"><ExternalLinkIcon className="w-4 h-4" /></div>
                </div>
                <div className="hover:bg-gray-900 text-gray-300 rounded flex justify-between px-3 py-2">                               
                    <div className="my-1"><h3 className="text-xs  tracking-wide">Profile</h3></div>
                </div>
                <div className="hover:bg-gray-900 text-gray-300 rounded flex justify-between px-3 py-2">                               
                    <div className="my-1"><h3 className="text-xs  tracking-wide">Settings</h3></div>
                    
                </div>
                <div className="hover:bg-gray-900 text-gray-300 rounded flex justify-between px-3 py-2">                               
                    <div className="my-1"><h3 className="text-xs  tracking-wide">Log out</h3></div>
                </div>

            </div>
        </div>  
        
    )
}

export default OptionsDropdown
