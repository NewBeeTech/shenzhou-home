import './style.css';
import HelicopterSystem from './HelicopterSystem';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(HelicopterSystem);
