import React, {useState, useEffect} from 'react'

export default function EmptyDependency() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []); // <- add empty brackets here
  
    return <h1>I've rendered {count} times!</h1>;
}
