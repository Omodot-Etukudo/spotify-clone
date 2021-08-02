import {ExternalLinkIcon} from '@heroicons/react/outline'
export default function Mobileoptionlink({name,url}) {
    return (
        <div className="flex space-x-2">
            <h3 className="text-base text-white">{name}</h3>
            <ExternalLinkIcon className="text-white w-4 h-4 my-auto"/>
        </div>
    )
}
