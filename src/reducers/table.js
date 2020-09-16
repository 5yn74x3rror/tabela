import {
  LOAD_TABLE_PENDING,
  LOAD_TABLE_SUCCESS,
  LOAD_TABLE_ERROR,
  HIDE_COLUMN,
  SHOW_COLUMN,
  SORT_TABLE,
  RESET_TABLE,
} from '../actions';

import { valuesMapper } from '../helpers/mappers';

const defaultState = {
  data: [],
  selectedColumn: null,
  selectedColumnSortType: null,
  hiddenColumns: [],
  dataIsLoading: true,
  error: null,
  dataTypes: [],
};

const tableReducer = (state = defaultState, { type, data, error }) => {
  switch (type) {
    case LOAD_TABLE_PENDING:
      return {
        ...state,
        dataIsLoading: true,
      };

    case LOAD_TABLE_SUCCESS:
      return {
        ...state,
        dataIsLoading: false,
        data,
        dataTypes: valuesMapper(data),
      };

    case LOAD_TABLE_ERROR:
      return {
        ...state,
        dataIsLoading: false,
        error,
      };

    case HIDE_COLUMN:
      return {
        ...state,
        hiddenColumns: state.hiddenColumns.concat(data),
      };

    case SHOW_COLUMN:
      return {
        ...state,
        hiddenColumns: state.hiddenColumns.filter(col => col !== data),
      };

    case SORT_TABLE:
      return {
        ...state,
        selectedColumn: data,
        selectedColumnSortType:
          state.selectedColumn === data && state.selectedColumnSortType === 'asc' ? 'desc' : 'asc',
      };

    case RESET_TABLE:
      return {
        ...state,
        selectedColumn: null,
        selectedColumnSortType: null,
        hiddenColumns: [],
      };

    default:
      return state;
  }
};

export default tableReducer;

export const getTableData = state => state.data;
export const getTableDataPending = state => state.dataIsLoading;
export const getTableDataError = state => state.error;

export const getHiddenColumns = state => state.hiddenColumns;

export const getSelectedColumn = state => state.selectedColumn;
export const getSortType = state => state.selectedColumnSortType;

export const getDataTypes = state => state.dataTypes;
