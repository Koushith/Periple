import axios from 'axios';
import {
  JOURNAL_LISTS_FAIL,
  JOURNAL_LISTS_REQUEST,
  JOURNAL_LISTS_SUCCESS,
} from '../constants/journalConstants';

export const fetchJournals = () => async (dispatch) => {
  try {
    dispatch({
      type: JOURNAL_LISTS_REQUEST,
    });

    const { data } = await axios.get('/api/journal');

    dispatch({
      type: JOURNAL_LISTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOURNAL_LISTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
