//Lecture 41 - Understand The Usage of useEffect Hook fetch data example

import React, { useEffect, useState } from "react";
import useApp from "./App_Hook";

// const cacheData = {};
const App = () => {
  const { user, id, loading, max, prevHandler, nextHandler } = useApp();
  // const [user, setUser] = useState([]);
  // const [id, setId] = useState(1);
  // const [loading, setLoading] = useState(false);
  // const max = 10;

  // const fetchUser = (id) => {
  //   return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       cacheData[`user-${id}`] = data;
  //       return data;
  //     });
  // };

  // useEffect(() => {
  //   if (cacheData[`user-${id}`]) {
  //     setUser(cacheData[`user-${id}`]);
  //     return;
  //   }
  //   setLoading(true);
  //   fetchUser(id)
  //     .then((data) => {
  //       setUser(data);
  //     })
  //     .finally(() => setLoading(false));
  // }, [id]);

  // useEffect(() => {
  //   if (!cacheData[`user-${id + 1}`] && id < max) {
  //     fetchUser(id + 1);
  //   }
  // }, [id]);

  // const nextHandler = () => {
  //   if (id < max) {
  //     setId(id + 1);
  //   }
  // };

  // const prevHandler = () => {
  //   if (id > 1) {
  //     setId(id - 1);
  //   }
  // };
  return (
    <div>
      <h1>User Detail: {id}</h1>
      {loading && <p>loading...</p>}
      {!loading && user && (
        <div>
          Name:{user.name}
          <br />
          Email:{user.email}
          <br />
          Phone: {user.phone}
        </div>
      )}
      <div>
        <button disabled={id === 1} onClick={prevHandler}>
          previous
        </button>
        <button disabled={id === max} onClick={nextHandler}>
          next
        </button>
      </div>
    </div>
  );
};

export default App;
