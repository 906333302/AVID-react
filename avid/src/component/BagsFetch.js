import { useState, useEffect } from 'react';

const BagsFetch = (url, refresh) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    console.log("here");
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setError(err.message);
        }
      })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url, refresh])

  return { data, error };
}
 
export default BagsFetch;