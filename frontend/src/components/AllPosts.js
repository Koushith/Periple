import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJournals } from '../redux/actions/journalActions';

function AllPosts() {
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  const j = useSelector((state) => state.allJournals);

  console.log('ALL', j);

  useEffect(() => {
    dispatch(fetchJournals());
  }, [dispatch]);

  return (
    <div>
      {loader ? <h1>Loading</h1> : ' No Post Found'}
      {/* {journals.length > 0 &&
        journals.map((journal) => (
          <div key={journal.id}>
            <h1 key={journal.id}>{journal.title}</h1>
            <span key={journal.id}>{journal.publishedAt}</span>
          </div>
        ))} */}
    </div>
  );
}

export default AllPosts;
