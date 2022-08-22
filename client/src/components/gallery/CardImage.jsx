export function CardImage ({image}) {
    return (
        <div className="max-w-xs mx-4 mb-2 bg-zinc-400 rounded-lg shadow-lg">
            <img className="w-full h-48"
                src={image.src.medium}
                alt="product" />
            <div className="px-6 py-4">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{image.photographer}</h4>
                <p className="leading-normal text-gray-700">Lorem ipsum dolor, </p>
            </div>
        </div>
    )
}