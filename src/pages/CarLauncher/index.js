import './style.css';
import CarLauncher from './CarLauncher';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(CarLauncher);
