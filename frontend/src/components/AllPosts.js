import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJournals } from '../redux/actions/journalActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

function AllPosts() {
  const dispatch = useDispatch();

  const journalsList = useSelector((state) => state.allJournals);

  const { loading, allJournals, error } = journalsList;
  console.log('ALL', allJournals, loading);
  useEffect(() => {
    dispatch(fetchJournals());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Posts</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {allJournals !== undefined &&
            allJournals.map((journal) => (
              <div key={journal._id}>
                <h1>{journal.title}</h1>
                <span>{journal.publishedAt}</span>{' '}
              </div>
            ))}
        </>
      )}
    </>
  );
}

export default AllPosts;
