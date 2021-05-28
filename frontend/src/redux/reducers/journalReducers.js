import {
  JOURNAL_LISTS_FAIL,
  JOURNAL_LISTS_REQUEST,
  JOURNAL_LISTS_SUCCESS,
} from '../constants/journalConstants';

// we know that this will be an array
export const fetchJournalReducer = (state = {}, action) => {
  switch (action.type) {
    case JOURNAL_LISTS_REQUEST:
      return { loading: true };

    case JOURNAL_LISTS_SUCCESS:
      return { loading: false, allJournals: action.payload };

    case JOURNAL_LISTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
