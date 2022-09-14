import {ChatIcon} from "@heroicons/react/solid"
function Footer({ title , Icon, isLike}) {
    return (
        
        <div className="hidden lg:flex md:flex lg:pl-56 lg:pr-6 pb-24 flex-col space-y-0 justify-start items-start w-full dark:bg-main-bg bg-white">
                <div className="flex justify-between items-start w-full lg:pb-14">
                    <div className="flex space-x-16 justify-start items-start">
                        <div className="flex flex-col space-y-2 justify-start items-start">
                            <h3 className="font-semibold dark:text-white text-main-bg text-xs">Company</h3>
                            <p className="text-xxs text-main-bg dark:text-gray-300">About</p>
                            <p className="text-xxs text-main-bg dark:text-gray-300">Jobs</p>
                            <p className="text-xxs text-main-bg dark:text-gray-300">For the Record</p>
                        </div>
                        <div className="flex flex-col space-y-2 justify-start items-start">
                            <h3 className="font-semibold dark:text-white text-main-bg text-xs">Communities</h3>
                            <p className="text-xxs text-main-bg dark:text-gray-300">For Artists</p>
                            <p className="text-xxs text-main-bg dark:text-gray-300">Developers</p>
                            <p className="text-xxs text-main-bg dark:text-gray-300">Advertising</p>
                            <p className="text-xxs text-main-bg dark:text-gray-300">Investors</p>
                            <p className="text-xxs text-main-bg dark:text-gray-300">Vendors</p>
                        </div>
                        <div className="flex flex-col space-y-2 justify-start items-start">
                            <h3 className="font-semibold dark:text-white text-main-bg text-xs">Useful Links</h3>
                            <p className="text-xxs text-main-bg dark:text-gray-300">Support</p>
                            <p className="text-xxs text-main-bg dark:text-gray-300">Free Mobile App</p>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="p-2 rounded-full bg-gray-100 dark:bg-card-hover flex justify-center items-center"><ChatIcon className="w-5 h-5"/></div>
                        <div className="p-2 rounded-full bg-gray-100 dark:bg-card-hover flex justify-center items-center"><ChatIcon className="w-5 h-5"/></div>
                        <div className="p-2 rounded-full bg-gray-100 dark:bg-card-hover flex justify-center items-center"><ChatIcon className="w-5 h-5"/></div>
                    </div>
                </div>
                <div className="border-t dark:border-card-hover border-gray-200 py-8 flex justify-between items-center text-main-bg dark:text-gray-300 text-xxs w-full">
                    <div className="flex space-x-4 justify-center">
                        <p>Legal</p>
                        <p>Privacy Center</p>
                        <p>Privacy Policy</p>
                        <p>Cookies</p>
                        <p>About Ads</p>
                    </div>
                    <div>
                        <p>&copy; 2022 Spotify AB</p>
                    </div>
                </div>            
        </div>
    )
}

export default Footer
