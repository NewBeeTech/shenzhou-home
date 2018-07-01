import './style.css';
import JoinUs from './JoinUs';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  list: state.HomeReducer.list,
});

export default connect(mapStateToProps)(JoinUs);
