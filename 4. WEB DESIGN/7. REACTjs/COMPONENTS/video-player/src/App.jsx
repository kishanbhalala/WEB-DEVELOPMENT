
import React, { useState } from 'react'

const App = () => {

  const [activeTab, setActiveTab] = useState(1);
    const handleClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

  return (
    <div>
      <div style={{textAlign:"center"}}>
        <input type="radio" name='read' onClick={() => handleClick(1)} className={`${activeTab === 1}`}/> <span>one</span>
        <input type="radio" name='read' onClick={() => handleClick(2)} className={`${activeTab === 2}`}/> <span>two</span>
        <input type="radio" name='read' onClick={() => handleClick(3)} className={`${activeTab === 3}`}/> <span>three</span>
        <input type="radio" name='read' onClick={() => handleClick(4)} className={`${activeTab === 4}`}/> <span>four</span>

        <div style={{marginTop:"100px"}}>
          {
            activeTab === 1 && <video height={"500px"} width={"800px"} controls autoPlay src="https://player.vimeo.com/external/200784842.sd.mp4?s=b3adf11a556756fb65bc70718153887c18caeeab&profile_id=164&oauth2_token_id=57447761"></video>
          }
          {
            activeTab === 2 && <video height={"500px"} width={"800px"} controls autoPlay src="https://player.vimeo.com/external/293348436.sd.mp4?s=5f926db2c1ed01e13c9e59f9965e4ff3ab6ec1d4&profile_id=164&oauth2_token_id=57447761"></video>
          }
          {
            activeTab === 3 && <video height={"500px"} width={"800px"} controls autoPlay src="https://player.vimeo.com/external/399635847.sd.mp4?s=ef0305947aff382d6e7fcd95ebdefd385a98f3a3&profile_id=164&oauth2_token_id=57447761"></video>
          }
          {
            activeTab === 4 && <video height={"500px"} width={"800px"} controls autoPlay src="https://player.vimeo.com/external/208611179.sd.mp4?s=cde9be5e098655dbc3bf62065e7ca5c2f2b2adfa&profile_id=164&oauth2_token_id=57447761"></video>
          }
        </div>
      </div>
    </div>
  )
}

export default App
