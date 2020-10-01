import { connect } from 'react-redux';
import UserList from '../components/UserList';

function mapStateToProps(state) {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)