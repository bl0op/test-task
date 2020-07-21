import React from 'react';
import './GirafeCard.css';
import girafeImg from '../../shared/girafe_goga.png'
import unknownImg from '../../shared/unknown.png'

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

function CardHeader(props) {
    return (
        <div className='girafe-card__header'>
            <button 
                className='girafe-card__edit-btn'
                onClick={() => props.onEdit(props.id)}
            >
                <i className='fas fa-ellipsis-h'></i>
            </button>
        </div>
    );
}

function CardImage(props) {
    return (
        <img src={ props.girafe.image ? girafeImg : unknownImg } className='girafe-card__image'/>
    );
}

function CardBody(props) {
    return (
        <div className='girafe-card__body'>
            <h1 className='girafe-card__name'>{props.girafe.name}</h1>
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
                        {props.girafe.sex}
                    </li>
                    <li className='girafe-card__info-stat'>
                        {props.girafe.weight}
                    </li>
                    <li className='girafe-card__info-stat'>
                        {props.girafe.height}
                    </li>
                </ul>
            </div>
            {/* /.girafe-card__image*/}
            <p className='girafe-card__characteristic'><strong className='girafe-card__prop'>Цвет: </strong> {props.girafe.color} </p>
            <p className='girafe-card__characteristic'><strong className='girafe-card__prop'>Диета: </strong> {props.girafe.diet} </p>
            <p className='girafe-card__characteristic'><strong  className='girafe-card__prop'>Характер: </strong> {props.girafe.temper} </p>
            {props.children}
        </div>
    );
}

function GirafeCard(props) {
    return (
        <div className='girafe-card'>
            <CardHeader {...props} />
            <CardImage {...props} />
            <CardBody {...props}>
                <button className='girafe-card__btn'>Сохранить</button>
            </CardBody>
        </div>
    );
}

function EditableGirafeCard(props) {

}

export {
    GirafeCard
}