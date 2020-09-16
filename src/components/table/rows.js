import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getTableData,
  getSelectedColumn,
  getSortType,
  getHiddenColumns,
  getDataTypes,
} from '../../reducers/table';
import { getKeys, sort } from '../../helpers';

const Rows = ({ tableData, hiddenColumns, sortType, selectedColumn, dataTypes }) => {
  const keys = getKeys(tableData);

  const sortedTable = [...tableData];

  if (selectedColumn !== null && sortType !== null) {
    const sortingType = `sort${dataTypes[selectedColumn]}`;
    sortedTable.sort(sort[sortingType](keys[selectedColumn], sortType));
  }

  return sortedTable.map(row => (
    <tr key={Math.random()}>
      {keys.map((key, idx) => (
        <td key={row[key]} className={hiddenColumns.indexOf(idx) !== -1 ? 'js-hidden' : ''}>
          {row[key]}
        </td>
      ))}
    </tr>
  ));
};

Rows.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object),
  hiddenColumns: PropTypes.arrayOf(PropTypes.number),
  selectedColumn: PropTypes.number,
  sortType: PropTypes.string,
  dataTypes: PropTypes.arrayOf(PropTypes.string),
};

Rows.defaultProps = {
  tableData: [],
  hiddenColumns: [],
  selectedColumn: null,
  sortType: null,
  dataTypes: [],
};

const mapStateToProps = ({ table }) => ({
  tableData: getTableData(table),
  hiddenColumns: getHiddenColumns(table),
  selectedColumn: getSelectedColumn(table),
  sortType: getSortType(table),
  dataTypes: getDataTypes(table),
});

export default connect(mapStateToProps)(Rows);
