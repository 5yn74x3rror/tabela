import { loadTablePending, loadTableSuccess, loadTableError } from '../actions';

import dataJSON from '../static/data.json';

// fake function just to demonstrate loading data from external source with some amount of delay
const fetchTableData = () => dispatch => {
  dispatch(loadTablePending());
  fetch(null)
    .then(() => {
      setTimeout(() => {
        if (Math.random() === 0.123456789) {
          // eslint-disable-next-line no-throw-literal
          throw 'Wlasnie wygrales w math-random-owego totka';
        }

        dispatch(loadTableSuccess(dataJSON));
        return dataJSON;
      }, 2000);
    })
    .catch(error => {
      dispatch(loadTableError(error));
    });
};

export { fetchTableData };

export default {};
