import { useState, useEffect } from 'react';

const useFetch = (url, clothType, size, color, style) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  console.log(size);

  useEffect(() => {
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
        if (clothType) {
          console.log("clothType");
          data = (data.filter((cloth) => cloth.type===clothType))
        }
        if (size.length !== 0) {
          console.log("size");
          data = (data.filter((cloth) => cloth.size.indexOf(size) !== -1))
        }
        console.log(data);
        if (color.length !== 0) {
          console.log("color");
          data = (data.filter((cloth) => cloth.color===color))
        }
        console.log(data);
        if (style.length !== 0) {
          console.log("style");
          data = (data.filter((cloth) => cloth.style===style))
        }
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
  }, [url, clothType, size, color, style])

  return { data, error };
}
 
export default useFetch;