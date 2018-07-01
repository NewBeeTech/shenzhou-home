import './style.css';
import ArmySystem from './ArmySystem';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(ArmySystem);
