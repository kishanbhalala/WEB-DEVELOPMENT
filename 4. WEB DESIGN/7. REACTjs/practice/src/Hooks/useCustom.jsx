import { useState } from "react";

const useCustom = (initial = 10) => {
  const [count, setCount] = useState(initial);

  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
  return [count,inc,dec]
};

export default useCustom;
