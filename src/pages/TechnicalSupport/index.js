import './style.css';
import TechnicalSupport from './TechnicalSupport';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  list: state.HomeReducer.list,
});

export default connect(mapStateToProps)(TechnicalSupport);
