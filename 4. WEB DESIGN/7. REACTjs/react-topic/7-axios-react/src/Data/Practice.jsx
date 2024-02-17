import axios from "axios";
import React, { useEffect, useState } from "react";

const Practice = () => {
  const [mydata, setMydata] = useState([]);
  const [isError, setIsError] = useState("");

  // useEffect(() => {
  //     axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => setMydata(res.data))
  //     .catch((err) => setIsError(err.message))
  // },[])

  const getApi = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setMydata(res.data);
    } catch (error) {
        setIsError(error.message);
    }
  };
  useEffect(() => {
    getApi();
  }, []);



  return (
    <div>
      {isError}

      {mydata.map((data) => { 
        return (
          <>
            <div>
              <h1>name : {data.id}</h1>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Practice;
