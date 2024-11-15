async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

const FetchData = async () => {

    const data = await getData();
    // console.log("data", data);

    return (
        <div>
            <h1>fetch data</h1>


            <div className="grid grid-cols-2  gap-10">
                {
                    data.splice(0, 10).map((item, index) => {
                        return (
                            <>
                                <div key={index}>
                                    <div className="border">
                                        <h1>Title: {item.title}</h1>
                                        <p>Body: {item.body}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FetchData
