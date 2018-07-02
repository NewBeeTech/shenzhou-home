import './style.css';
import AllCases from './AllCases';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(AllCases);
