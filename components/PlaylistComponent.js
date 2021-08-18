import PrimaryButton from "./PrimaryButton"
import {MusicNoteIcon} from "@heroicons/react/outline"
function PlaylistComponent() {
    return (
        <div className="h-screen lg:h-screen lg:w-full lg:pl-72 lg:max-w-full max-w-full min-w-full py-20 lg:pt-20 px-3 lg:pr-6 lg:bg-gray-900">
            
            <div className="hidden lg:flex flex-col h-full">
                <div className="flex flex-col space-y-8 mx-auto items-center my-auto">
                    <MusicNoteIcon className="lg:w-20 lg:h-20"/>
                    <div className="flex flex-col space-y-2 items-center">
                        <h3 className="text-3xl text-white font-bold">Create your first playlist</h3>
                        <p className="mb-10 text-white">It's easy, we'll help you.</p>
                    </div>
                    
                    <PrimaryButton title="create playlist"/>
                </div>                
            </div>
            

        </div>
    )
}

export default PlaylistComponent
