//Create a React component that fetches data from an API (https://jsonplaceholder.typicode.com/posts) and displays the title of the first post. Use useEffect and useState.

import React, { useState, useEffect } from 'react';

const FetchPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then((data) => {
      setPost(data[0]);
      setLoading(false);
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>please wait..</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <h2>"{post.title}"</h2>
  );
};

export default FetchPost;
