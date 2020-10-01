import { connect } from 'react-redux';
import RandomFact from '../components/RandomFact';
import { fetchFact } from '../store/facts/actions';

function mapStateToProps(state) {
    return {
        facts: state.facts.data,
    }
}

const mapDispatchToProps = {
    fetchFact,
}
 
export default connect(mapStateToProps, mapDispatchToProps)(RandomFact)