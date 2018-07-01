import './style.css';
import SubmarineSystem from './SubmarineSystem';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(SubmarineSystem);
