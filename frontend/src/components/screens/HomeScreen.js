import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AllPosts from '../AllPosts';

function HomeScreen({ history }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log('userDetais from journal', userInfo);
  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [userInfo]);
  return <AllPosts />;
}

export default HomeScreen;
