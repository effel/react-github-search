import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

let RepItemsList = ({userList}) => {
    return (
        userList ?
            <ul className="rep-item-list">
                {userList.map((item, index) => (
                    <li key={item.id}>
                        <a href={item.owner.html_url} target='_blank'>
                            <h2>{item.name}</h2>
                            Number of stars: {item.stargazers_count}
                            Forks: {item.forks_count}
                        </a>
                    </li>
                ))}
            </ul> :
            null
    );
};
RepItemsList.propTypes = {
    userList: PropTypes.array.shape({
        name: PropTypes.string,
        owner: PropTypes.object.shape({
            html_url: PropTypes.string
        }),
        stargazers_count: PropTypes.string,
        forks_count: PropTypes.string
    })
};

const mapStateToProps = (state) => ({
    userList: state.items
});
RepItemsList = connect(mapStateToProps,null)(RepItemsList);
export default RepItemsList;