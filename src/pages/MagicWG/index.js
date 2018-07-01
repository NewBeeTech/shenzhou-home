import './style.css';
import MagicWG from './MagicWG';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(MagicWG);
