import './style.css';
import AnalogEquipment from './AnalogEquipment';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
});

export default connect(mapStateToProps)(AnalogEquipment);
