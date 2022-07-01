import React, { useEffect, useState } from "react";

const useGetTOdo = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/todo/")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);
  return [list, setList];
};

export default useGetTOdo;
