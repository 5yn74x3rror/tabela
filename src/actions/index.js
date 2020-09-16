export const LOAD_TABLE_PENDING = 'LOAD_TABLE_PENDING';
export const LOAD_TABLE_SUCCESS = 'LOAD_TABLE_SUCCESS';
export const LOAD_TABLE_ERROR = 'LOAD_TABLE_ERROR';

export const HIDE_COLUMN = 'HIDE_COLUMN';
export const SHOW_COLUMN = 'SHOW_COLUMN';

export const SORT_TABLE = 'SORT_TABLE';

export const RESET_TABLE = 'RESET_TABLE';

const loadTablePending = () => ({
  type: LOAD_TABLE_PENDING,
});

const loadTableSuccess = data => ({
  type: LOAD_TABLE_SUCCESS,
  data,
});

const loadTableError = error => ({
  type: LOAD_TABLE_ERROR,
  error,
});

const hideTableColumn = data => ({
  type: HIDE_COLUMN,
  data,
});

const showTableColumn = data => ({
  type: SHOW_COLUMN,
  data,
});

const sortTable = data => ({
  type: SORT_TABLE,
  data,
});

const resetTableData = () => ({
  type: RESET_TABLE,
});

export {
  loadTablePending,
  loadTableSuccess,
  loadTableError,
  hideTableColumn,
  showTableColumn,
  sortTable,
  resetTableData,
};

export default {};
