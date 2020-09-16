import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import {
  getTableData,
  getSelectedColumn,
  getSortType,
  getHiddenColumns,
} from '../../reducers/table';

import SortingHeader from './sortingHeader';
import HideColumnIcon from './hideColumnIcon';
import { getKeys } from '../../helpers';

const Headers = ({ tableData, hiddenColumns, sortType, selectedColumn }) => {
  const keys = getKeys(tableData);

  return keys.map((key, idx) => (
    <th key={key} className={hiddenColumns.indexOf(idx) !== -1 ? 'js-hidden' : ''}>
      <SortingHeader name={key} colNumber={idx} />
      <HideColumnIcon colNumber={idx} />
      {sortType && selectedColumn === idx && (
        <FontAwesomeIcon icon={sortType === 'asc' ? faChevronDown : faChevronUp} />
      )}
    </th>
  ));
};

Headers.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object),
  hiddenColumns: PropTypes.arrayOf(PropTypes.number),
  selectedColumn: PropTypes.number,
  sortType: PropTypes.string,
};

Headers.defaultProps = {
  tableData: [],
  hiddenColumns: [],
  selectedColumn: null,
  sortType: null,
};

const mapStateToProps = ({ table }) => ({
  tableData: getTableData(table),
  hiddenColumns: getHiddenColumns(table),
  selectedColumn: getSelectedColumn(table),
  sortType: getSortType(table),
});

export default connect(mapStateToProps)(Headers);
