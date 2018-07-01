import './style.css';
import MagicIETM from './MagicIETM';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(MagicIETM);
