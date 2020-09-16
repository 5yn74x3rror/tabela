import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sortTable } from '../../actions';

const sortingHeader = ({ name, colNumber, sort }) => {
  return (
    <button type="button" className="table-header__name" onClick={() => sort(colNumber)}>
      {name.toUpperCase()}
    </button>
  );
};

sortingHeader.propTypes = {
  name: PropTypes.string.isRequired,
  colNumber: PropTypes.number.isRequired,
  sort: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sort: sortTable,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(sortingHeader);
