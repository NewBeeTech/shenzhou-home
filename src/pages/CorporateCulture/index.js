import './style.css';
import CorporateCulture from './CorporateCulture';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(CorporateCulture);
