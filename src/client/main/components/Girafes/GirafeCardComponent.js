import React from 'react';

function EditPanel(){
    return (
        <div className='edit-panel__edit-btn'>
           <button className='btn'>
               <i className='fas fa-pencil-alt edit-panel__edit-icon'> Редактировать</i>
            </button> 
           <button className='btn'>
               <i className='fas fa-trash-alt edit-panel__edit-icon'> Удалить</i>
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
            <img src='#' className='girafe-card__image'/>
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
                </div>
                {/* /.girafe-card__image*/}
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
                <p><strong>Цвет: </strong> Стандарт</p>
                <p><strong>Диета: </strong> Растительный</p>
                <p><strong>Характер: </strong> Кокетка</p>
            </div>
            {/* /.girafe-card__body*/}
            <EditPanel isActive={''}/>
        </div>
    );
}