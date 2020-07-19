import React from 'react';
import './GirafeCard.css';
import girafeImg from './girafe-img.png';

function EditPanel(){
    return (
        <div className='edit-panel'>
           <button className='btn'>
               <i className='fas fa-pencil-alt btn-icon'></i> Редактировать
            </button> 
           <button className='btn'>
               <i className='fas fa-trash-alt btn-icon'></i> Удалить
            </button> 
        </div>
    );
}

/* fas fa-ruler-vertical */
export default function GirafeCard() {
    return (
        <div className='girafe-card'>
            <div className='girafe-card__header'>
                <button className='girafe-card__edit-btn'>
                    <i className='fas fa-ellipsis-h'></i>
                </button>
            </div>
            <img src={girafeImg} className='girafe-card__image'/>
            <div className='girafe-card__body'>
                <h1 className='girafe-card__name'>Мотильда</h1>
                <div className='girafe-card__info-bar'>
                    <ul className='girafe-card__info-icons'>
                        <li className='girafe-card__info-icon'>
                            <i className='fas fa-venus-mars'></i>
                        </li>
                        <li className='girafe-card__info-icon'>
                            <i className='fas fa-balance-scale'></i>
                        </li>
                        <li className='girafe-card__info-icon'>
                            <i className='fas fa-ruler-vertical'></i>
                        </li>
                    </ul>
                    <ul className='girafe-card__info-stats'>
                        <li className='girafe-card__info-stat'>
                            Ж
                        </li>
                        <li className='girafe-card__info-stat'>
                            800
                        </li>
                        <li className='girafe-card__info-stat'>
                            4
                        </li>
                    </ul>
                </div>
                {/* /.girafe-card__image*/}
                <p className='girafe-card__characteristic'><strong className='girafe-card__prop'>Цвет: </strong> Стандарт</p>
                <p className='girafe-card__characteristic'><strong className='girafe-card__prop'>Диета: </strong> Растительный</p>
                <p className='girafe-card__characteristic'><strong  className='girafe-card__prop'>Характер: </strong> Кокетка</p>
            </div>
            {/* /.girafe-card__body*/}
            <EditPanel isActive={''}/>
        {/* /.girafe-card*/}
        </div>
    );
}