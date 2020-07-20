import React from 'react';
import { connect } from 'react-redux';

import Main from './MainComponent';
import SideMenu from './SideMenu/SideMenuComponent';
import Spinner from './Spinner/SpinnerComponent';

const mapStateToProps = (state) => {
    return {
        isLoading: state.user.isLoading
    }
}

function StoreWrapper(props) {
    if(props.isLoading){
        return (<Spinner>Загрузка пользователя...</Spinner>);
    }
    else {
        return (
        <>
            <SideMenu/>
            <Main/>
        </>
        )
    }
}

export default connect(mapStateToProps)(StoreWrapper);