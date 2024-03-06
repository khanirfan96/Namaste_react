import { useEffect, useState } from "react";
import { MAIN_API } from "./constants";

const useMainApi = () => {
  const [resapi, setresApi] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MAIN_API);
    const json = await data.json();
    // console.log(json, "tw");

    setresApi(json);
  };

  return resapi;
};

export default useMainApi;
