import {ExternalLinkIcon} from "@heroicons/react/outline"
function OptionsDropdown() {
    return (
        <div className="bg-gray-800 z-20 w-52 top-12 mt-1 rounded p-1 dropdown-active shadow-2xl fixed right-8">
            <div className="flex flex-col">
                <div className="hover:bg-gray-900 text-white rounded flex justify-between px-3 py-2">                               
                    <div className="my-1"><h3 className="text-xs font-semibold tracking-wide">Account</h3></div>
                    <div className="py-0.5"><ExternalLinkIcon className="w-5 h-5" /></div>
                </div>
                <div className="hover:bg-gray-900 text-white rounded flex justify-between px-3 py-2">                               
                    <div className="my-1"><h3 className="text-xs font-semibold tracking-wide">Profile</h3></div>
                </div>
                <div className="hover:bg-gray-900 text-white rounded flex justify-between px-3 py-2">                               
                    <div className="my-1"><h3 className="text-xs font-semibold tracking-wide">Upgrade to Premium</h3></div>
                    <div className="py-0.5"><ExternalLinkIcon className="w-5 h-5" /></div>
                </div>
                <div className="hover:bg-gray-900 text-white rounded flex justify-between px-3 py-2">                               
                    <div className="my-1"><h3 className="text-xs font-semibold tracking-wide">Log out</h3></div>
                </div>

            </div>
        </div>  
        
    )
}

export default OptionsDropdown
