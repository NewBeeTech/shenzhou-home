import './style.css';
import CombatPlatform from './CombatPlatform';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(CombatPlatform);
