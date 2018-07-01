import './style.css';
import MagicBook from './MagicBook';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(MagicBook);
