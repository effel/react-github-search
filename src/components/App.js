import React from 'react';
import Loading from '../containers/Loading';
import RepItemsList from '../containers/RepItemsList';
import SearchUserForm from '../containers/SearchUserForm';
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <SearchUserForm />
            <Loading/>
            <RepItemsList />
        </div>
    );
};

export default App;
