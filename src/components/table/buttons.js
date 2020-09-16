import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getSelectedColumn,
  getSortType,
  getHiddenColumns,
  getTableData,
} from '../../reducers/table';
import { resetTableData, showTableColumn } from '../../actions';
import { getKeys } from '../../helpers';

const Buttons = ({
  hiddenColumns,
  selectedColumn,
  sortType,
  resetTable,
  tableHeaders,
  showColumn,
}) => {
  const isResetActive = hiddenColumns.length > 0 || selectedColumn !== null || sortType !== null;

  return (
    <div className="table-buttons__wrap">
      <button
        type="button"
        className="table-buttons__button"
        disabled={!isResetActive}
        onClick={() => resetTable()}
      >
        Reset tabeli
      </button>
      {!!hiddenColumns.length && (
        <>
          <span>Przywróc ukryte kolumny: </span>
          {hiddenColumns.map(col => (
            <button
              type="button"
              key={col}
              className="table-buttons__button"
              onClick={() => showColumn(col)}
            >
              {tableHeaders[col]}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

Buttons.propTypes = {
  hiddenColumns: PropTypes.arrayOf(PropTypes.number),
  selectedColumn: PropTypes.number,
  sortType: PropTypes.string,
  resetTable: PropTypes.func.isRequired,
  showColumn: PropTypes.func.isRequired,
  tableHeaders: PropTypes.arrayOf(PropTypes.string),
};

Buttons.defaultProps = {
  hiddenColumns: [],
  selectedColumn: null,
  sortType: null,
  tableHeaders: [],
};

const mapStateToProps = ({ table }) => ({
  hiddenColumns: getHiddenColumns(table),
  selectedColumn: getSelectedColumn(table),
  sortType: getSortType(table),
  tableHeaders: getKeys(getTableData(table)),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      resetTable: resetTableData,
      showColumn: showTableColumn,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
