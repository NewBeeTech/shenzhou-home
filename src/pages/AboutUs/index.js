import './style.css';
import AboutUs from './AboutUs';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(AboutUs);
