import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { hideTableColumn } from '../../actions';

const HideColumnIcon = ({ hideColumn, colNumber }) => {
  return <FontAwesomeIcon icon={faEyeSlash} onClick={() => hideColumn(colNumber)} />;
};

HideColumnIcon.propTypes = {
  hideColumn: PropTypes.func.isRequired,
  colNumber: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      hideColumn: hideTableColumn,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(HideColumnIcon);
