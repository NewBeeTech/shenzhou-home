import './style.css';
import Home from './Home';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  list: state.HomeReducer.list,
});

export default connect(mapStateToProps)(Home);
