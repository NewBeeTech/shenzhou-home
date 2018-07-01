import './style.css';
import Dynamic from './Dynamic';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(Dynamic);
