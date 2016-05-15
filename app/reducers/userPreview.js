import {createReducer} from 'redux-act';
import userPreview from '../components/Users/actions/userPreview';

export default createReducer(
  {
    [userPreview]: (state, id) => id
  },
  null
)
