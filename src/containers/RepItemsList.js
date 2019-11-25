import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import './RepItemsList.css';

let RepItemsList = ({userList, loading}) => {
    const userListEmptyHtml = !loading && userList && userList.length === 0  ? <p className="empty-text">The amount of folders is 0</p> : null;
    return (
        !loading && userList && userList.length > 0  ?
            <ul className="rep-item-list">
                {userList.map((item, index) => (
                    <li key={item.id}>
                        <a href={item.html_url} target='_blank'  rel='noopener noreferrer'>
                            <h2>{item.name}</h2>
                            <p>Number of stars: {item.stargazers_count}</p>
                            <p>Forks: {item.forks_count}</p>
                        </a>
                    </li>
                ))}
            </ul> :
            userListEmptyHtml
    );
};
RepItemsList.propTypes = {
    userList: PropTypes.any,
    loading: PropTypes.bool
};

const mapStateToProps = (state) => ({
    userList: state.items,
    loading: state.loading
});
RepItemsList = connect(mapStateToProps,null)(RepItemsList);
export default RepItemsList;