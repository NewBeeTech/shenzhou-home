import './style.css';
import EarlyWarning from './EarlyWarning';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(EarlyWarning);
