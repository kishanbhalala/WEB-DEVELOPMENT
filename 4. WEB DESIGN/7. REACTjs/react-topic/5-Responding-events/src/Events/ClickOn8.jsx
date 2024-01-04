import React from "react";

const ClickOn8 = () => {

    /* Event propagation  */

    return (
         <>
              <h1 className="text-6xl">Event propagation</h1>
              <div className="Toolbar" onClick={() => {
              alert('You clicked on the toolbar!');
              }}>
              <button className="button" onClick={() => alert('Playing!')}>
              Play Movie
              </button>
              <button className="button" onClick={() => alert('Uploading!')}>
              Upload Image
              </button>
              </div>
         </>
       );
}

export default ClickOn8