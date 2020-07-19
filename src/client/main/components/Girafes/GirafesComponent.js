import React from 'react';
import GirafeCard from './GirafeCardComponent.js';

function TabBar(props){
    return (
        <div className='tab-bar'>
            <ul className='tab-bar__tabs'>
                <li className='tab-bar__tabs-item tab-bar__tabs-item--active'>
                    Вольер 1
                </li>
                <li className='tab-bar__tabs-item'>
                    Вольер 2
                </li>
                <li className='tab-bar__tabs-item'>
                    Вольер 3
                </li>
            </ul>
            <button className='tab-bar__add-btn'>
                <i className='fas fa-plus-circle'></i>
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
            <div>
                <span className='girafes__info-percent'>75%</span> Заполнение вольера
            </div>
            <div>
                {/* deal with separate btn class */}
                <progress className='fullness-bar' value='75' max='100'></progress> <button className='btn btn--small'> Информация</button>
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
                    <i className='fas fa-times'></i>
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

export default function Girafes(){
    return (
        <div className='girafes'>
            <TabBar/>
            <div className='girafes__title'>
               <h2 className='girafes__header'>Жирафы</h2> 
               <button className='girafes__add-btn'>
                   <i className='fas fa-plus-circle'></i>
               </button>
            </div>
            <div className='girafes__cards'>
                {/*...*/}
                <GirafeCard/>
            </div>
            <GirafesInfo/>
            <Updates isActive={''}/>
        </div>
    );
}