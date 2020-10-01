import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from '@material-ui/core';
import { fetchUsers } from './store/users/actions';
import Navigation from './components/Navigation/Navigation';
import UserList from './containers/UserListContainer';
import About from './components/About';
import UserAddForm from './containers/UserAddFormContainer';
import './App.css'

store.dispatch(fetchUsers());

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navigation/>
                <Container className="app-container" maxWidth="md">
                    <Switch>
                        <Route path='/users' component={UserList} />
                        <UserAddForm path='/register' component={UserAddForm}></UserAddForm>
                        <Route path='/About' component={About} />
                        <Route path='/' render={() => <Redirect to='/users' />} />
                    </Switch>
                </Container>
            </Router>
        </Provider>
    )
}
