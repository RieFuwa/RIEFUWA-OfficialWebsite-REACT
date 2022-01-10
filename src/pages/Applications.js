import React from 'react'
import Footer from '../partials/Footer';
import Header from '../partials/Header'
import './Styles.css';
import Applist from '../components/Applist';

function Applications() {
    return (
        <div className='appl'>
            <Header></Header>
            <hr className='hrr'></hr>
            <Applist></Applist>
            <Footer></Footer>
        </div>
    )
}

export default React.memo(Applications)
