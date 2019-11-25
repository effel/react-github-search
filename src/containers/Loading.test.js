import React from 'react';
import { connect } from 'react-redux';
import loadImg from '../images/loading.gif';
import PropTypes from 'prop-types';
import './Loading.css';

let Loading = ({ loading }) => (
    loading ?
        <div className='loading'>
            <img src={loadImg} alt='loading' />
            <h3>LOADING</h3>
        </div> :
        null
);
Loading.propTypes = {
    loading: PropTypes.bool
};
const mapStateToProps = (state) => ({loading: state.loading})
Loading = connect(mapStateToProps,null)(Loading)
export default Loading;
