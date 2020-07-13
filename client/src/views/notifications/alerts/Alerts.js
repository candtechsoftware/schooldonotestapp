import React from 'react'
import {
  CAlert,
} from '@coreui/react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'; 


const Alerts = ({ alerts }) => 
  alerts !== null && 
  alerts.length > 0 && 
  alerts.map(alert => (
      <CAlert key={alert.id} color={alert.alertType}>
        {alert.msg}
      </CAlert>

  ));

Alerts.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alerts);
