import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import './RepItemsList.css';

let RepItemsList = ({userList, hasError}) => {
    const UserListEmptyHtml = () => {
        return <p className="empty-text">The amount of folders is 0</p>
    };
    const UserListErrorHtml = () => {
        return <p className="error-text">Error!!!!</p>
    };

    const UserListHtml = () => {
        return <ul className="rep-item-list">
            {userList.map((item) => (
                <li key={item.id}>
                    <a href={item.html_url} target='_blank'  rel='noopener noreferrer'>
                        <h2>{item.name}</h2>
                        <p>Number of stars: {item.stargazers_count}</p>
                        <p>Forks: {item.forks_count}</p>
                    </a>
                </li>
            ))}
        </ul>
    };

    return (
        userList ?
        userList.length > 0 ? <UserListHtml/> : <UserListEmptyHtml/>
        : hasError ? <UserListErrorHtml/> : null
    );
};
RepItemsList.propTypes = {
    userList: PropTypes.any,
    hasError: PropTypes.bool
};

const mapStateToProps = (state) => ({
    userList: state.items,
    hasError: state.hasError
});
RepItemsList = connect(mapStateToProps,null)(RepItemsList);
export default RepItemsList;