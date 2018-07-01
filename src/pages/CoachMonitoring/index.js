import './style.css';
import CoachMonitoring from './CoachMonitoring';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(CoachMonitoring);
