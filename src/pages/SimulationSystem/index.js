import './style.css';
import SimulationSystem from './SimulationSystem';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(SimulationSystem);
