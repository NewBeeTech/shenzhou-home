import './style.css';
import MilitaryIndustrialEnterprises from './MilitaryIndustrialEnterprises';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(MilitaryIndustrialEnterprises);
