import './style.css';
import MAXSim from './MAXSim';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(MAXSim);
