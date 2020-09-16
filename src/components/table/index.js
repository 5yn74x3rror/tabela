import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTableDataPending, getTableDataError } from '../../reducers/table';
import { fetchTableData } from '../../middlewares/fetchTableData';

import Headers from './headers';
import Rows from './rows';
import Buttons from './buttons';

const Table = ({ tableDataPending, tableDataError, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (tableDataPending) {
    return (
      <div className="main">
        <p>Dane sie laduja... Tak naprawde to sie nie laduja ale tu mozna dac loaderek</p>
      </div>
    );
  }

  if (tableDataError) {
    return (
      <div className="main">
        <p>Wystapil jakis blad. Lepiej sprawdz co jest grane</p>
      </div>
    );
  }

  return (
    <div className="main-container">
      <Buttons />
      <table className="table">
        <thead>
          <tr>
            <Headers />
          </tr>
        </thead>
        <tbody>
          <Rows />
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  tableDataPending: PropTypes.bool,
  tableDataError: PropTypes.string,
  fetchData: PropTypes.func.isRequired,
};

Table.defaultProps = {
  tableDataPending: true,
  tableDataError: null,
};

const mapStateToProps = ({ table }) => ({
  tableDataPending: getTableDataPending(table),
  tableDataError: getTableDataError(table),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchData: fetchTableData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Table);
