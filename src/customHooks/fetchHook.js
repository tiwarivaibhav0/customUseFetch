import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setState] = useState([]);

  const extractDataFromApi = (urlPassed = "", payload = "", method = "GET") => {
    let url = new URL(urlPassed);
    for (let i in payload) {
      url.searchParams.append(i, payload[i]);
    }
    fetch(url, {
      headers: {},
      method: method,
    })
      .then((res) => res.json())
      .then((dataFetched) => setState(dataFetched));
  };

  return { data, extractDataFromApi };
};

export default useFetch;
