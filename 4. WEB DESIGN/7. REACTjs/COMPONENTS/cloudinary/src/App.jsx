import { useState } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState("")
  const submitImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "gillipatel")
    data.append("cloud_name", "du8gxeupl")

    fetch("https://api.cloudinary.com/v1_1/du8gxeupl/image/upload", {
      method: "post",
      body: data
    }).then((res) => res.json())
      .then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      })
  }
  return (
    <>
      <div>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={submitImage}>upload</button>
      </div>
    </>
  )
}

export default App
