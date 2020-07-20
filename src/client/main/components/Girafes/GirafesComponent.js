import React from 'react';
import { connect } from 'react-redux';

import GirafeCard from './GirafeCardComponent';
import './Girafes.css';

const mapStateToProps = (state) => {
    return {
        enclosures: state.enclosures 
    }
}

function TabBar(props){
    return (
        <div className='girafes__tab-bar'>
            <ul className='girafes__tabs'>
                <li className='girafes__tab-item girafes__tab-item--active'>
                    Вольер 1
                </li>
                <li className='girafes__tab-item'>
                    Вольер 2
                </li>
                <li className='girafes__tab-item'>
                    Вольер 3
                </li>
            </ul>
            <button className='girafes__add-enclosure-btn'>
                <i className='fas fa-plus girafes__add-enclosure-icon'></i>
            </button>
        </div>
    );
}

function GirafesInfo(){
    return (
        <div className='girafes__info'>
            <button className='girafes__hide-info-btn'>
                <i className='fas fa-times'></i>
            </button>
            <div className='girafes__info-title'>
                <span className='girafes__info-percent'>75%</span> Заполнение вольера
            </div>
            <div>
                {/* deal with separate btn class */}
                <progress className='fullness-bar' value='75' max='100'></progress> <button className='btn btn--dark'> Информация</button>
            </div>
        </div>
    );
}

function Updates(){
    return (
        <div className='updates'>
            <div className='updates__header'>
                <h3 className='updates__title'>Обновление</h3>
                <button className='girafes__hide-info-btn'>
                    <i className='fas fa-times '></i>
                </button>
            </div>
            <div className='updates__table'>
                <table>
                    <thead className='updates__table--head'>
                        <tr>
                            <td>Дата</td>
                            <td>Действие</td>
                            <td>Жираф</td>
                            <td>Статус</td>
                        </tr>
                    </thead>
                    <tbody className='updates__table--body'>
                        <tr>
                            <td>02 апр 2020</td>
                            <td>Новый жираф</td>
                            <td>Матильда</td>
                            <td><div className='badge badge--green'>Выполнено</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function Girafes(props){
    return (
        <div className='girafes'>
            <TabBar/>
            <div className='girafes__header'>
               <h2 className='girafes__title'>Жирафы</h2> 
               <button className='girafes__add-btn'>
                   <i className='fas fa-plus  girafes__add-icon'></i>
               </button>
            </div>
            <div className='girafes__cards'>
                {/*...*/}
            </div>
            <GirafesInfo/>
            <Updates isActive={''}/>
        </div>
    );
}

export default Girafes;