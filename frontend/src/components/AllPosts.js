import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllPosts() {
  const [journals, setJournals] = useState({});
  const [loader, setLoader] = useState(false);

  console.log('Title', journals);

  useEffect(() => {
    setLoader(true);
    const fetchJournal = async () => {
      const { data } = await axios.get('/api/journal');
      if (data) {
        setJournals(data);
        setLoader(false);
      }
    };

    fetchJournal();
  }, []);

  return (
    <div>
      {loader ? <h1>Loading</h1> : ' No Post Found'}
      {journals.length > 0 &&
        journals.map((journal) => (
          <div key={journal.id}>
            <h1 key={journal.id}>{journal.title}</h1>
            <span key={journal.id}>{journal.publishedAt}</span>
          </div>
        ))}
    </div>
  );
}

export default AllPosts;
