import React from 'react';
import { connect } from 'react-redux';
import { setUserName, getUserReps } from '../actions';

let SearchUserForm = ({setUserName, getUserReps}) => {
    return (
        <div className="search-form">
            <input type="text" onChange={e => setUserName(e.target.value)}  />
            <button onClick={getUserReps}>{'Send'}</button>
        </div>
    );
};

const mapDispatchToProps = {
    setUserName: setUserName,
    getUserReps: getUserReps
};
SearchUserForm = connect(null,mapDispatchToProps)(SearchUserForm);

export default SearchUserForm;
