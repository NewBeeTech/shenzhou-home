import './style.css';
import NavalVessels from './NavalVessels';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(NavalVessels);
