
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './components/Dashboard';
import { Container } from '@mui/material';

const App = () => {
    return (
        <Provider store={store}>
            <Container>
                <Dashboard />
            </Container>
        </Provider>
    );
};

export default App;