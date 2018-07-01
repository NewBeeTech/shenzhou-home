import './style.css';
import SpaceSituation from './SpaceSituation';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(SpaceSituation);
