import { useState, useEffect } from 'react';

const DetailFetch = (url, id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  console.log(id);

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
        console.log(data);
        data = (data.filter((cloth) => cloth.id===parseInt(id)))
        setData(data);
        console.log(data);
        setError(null);
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
  }, [url, id])

  return { data, error };
}
 
export default DetailFetch;