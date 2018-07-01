import './style.css';
import RocketSystem from './RocketSystem';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(RocketSystem);
