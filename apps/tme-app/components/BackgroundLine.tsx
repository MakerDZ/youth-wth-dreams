export default function BackgroundLine() {
    return (
        <div className="fixed z-1 w-screen min-h-screen flex justify-center px-6 py-40 pointer-events-none">
            <div
                className="absolute z-1 w-full h-full top-0 opacity-40"
                style={{
                    backgroundImage: 'url(https://assets.dub.co/misc/grid.svg)',
                    filter: 'invert(1)',
                }}
            ></div>
        </div>
    );
}
