import { connect } from 'react-redux';
import UserAddForm from '../components/UserAddForm';
import { addUser } from '../store/users/actions';

function mapStateToProps() {
    return {}
}

const mapDispatchToProps = {
    addUser,
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserAddForm)