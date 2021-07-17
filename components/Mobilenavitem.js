export default function Mobilenavitem({title, Icon}) {
    return (
        <div className="cursor-pointer flex-col">
            <div>
                <div className=" px-4 mb-1"><Icon className="h-8" /></div>
                <div className="font-semibold text-sm text-center"><p>{title}</p></div>
            </div>
        </div>
    )
}