import axios from 'axios';
import {
  JOURNAL_LISTS_FAIL,
  JOURNAL_LISTS_REQUEST,
  JOURNAL_LISTS_SUCCESS,
} from '../constants/journalConstants';
import { logout } from './userActions';

export const fetchJournals = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: JOURNAL_LISTS_REQUEST,
    });

    // we are grabbing userlogin- from state and getstate is used to pull the obj from state
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get('/api/journal', config);

    dispatch({
      type: JOURNAL_LISTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    // if (message === `Cannot read property 'token' of null`) {
    //   dispatch(logout());
    // }
    dispatch({
      type: JOURNAL_LISTS_FAIL,
      payload: message,
    });
  }
};
