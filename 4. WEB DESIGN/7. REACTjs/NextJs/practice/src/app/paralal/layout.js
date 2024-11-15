export default function paralalLayout({ children, left, right }) {
    const isSidebar = true;
    return (
        <>
            <div>
                <h1>{children}</h1>
                {
                    isSidebar
                        ? <h1 className="text-2xl text-red-400">{left}</h1>
                        : <h1 className="text-2xl text-yellow-400">{right}</h1>
                }
                
                {/* <div> @name  parallal routes kevay tena mate layout banavu jaruri che conditional render krvu hoi tyre @ parallel routes no use karay slotes pn keavy</div> */}
            </div>
        </>
    )
}