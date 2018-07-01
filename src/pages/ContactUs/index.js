import './style.css';
import ContactUs from './ContactUs';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  list: state.HomeReducer.list,
});

export default connect(mapStateToProps)(ContactUs);
