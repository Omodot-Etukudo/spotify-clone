function PrimaryButton({title, url}) {
    return (
        <div>
            <button className="bg-white border font-bold hover:scale-105 transition-transform duration-100 px-10 py-3 tracking-wide text-gray-900 text-xs uppercase rounded-full">{title}</button>
        </div>
    )
}

export default PrimaryButton
