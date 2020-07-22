import React, { useState } from 'react';
import './GirafeCard.css';
import girafeImg from '../../shared/girafe_goga.png'
import unknownImg from '../../shared/unknown.png'

function EditPanel(props){
    return (
        <div className='edit-panel'>
           {/*<button className='btn'>
               <i className='fas fa-pencil-alt btn-icon'></i> Редактировать
            </button> */}
           <button className='btn' onClick={() => props.onDelete(props.id)}>
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
                onClick={() => props.onHeaderClick(props.id)}
            >
                {props.children}
            </button>
        </div>
    );
}

function CardImage(props) {
    return ( <img src={ props.girafe.image ? girafeImg : unknownImg } className='girafe-card__image'/>
    );
}

function CardBody(props) {
    return (
        <form>
            <div className='girafe-card__body'>
                <input className='girafe-card__name'
                    onChange={(e) => { props.onChange('name', e.target.value)}}
                    value={props.girafe.name}
                    readOnly={props.readOnly ? 'readonly' : ''}
                    placeholder='Введите имя'
                />
                <div className='girafe-card__info-bar'>
                    <div className='girafe-card__info-icons'>
                        <div className='girafe-card__info-icon'>
                            <i className='fas fa-venus-mars'></i>
                        </div>
                        <div className='girafe-card__info-icon'>
                            <i className='fas fa-balance-scale'></i>
                        </div>
                        <div className='girafe-card__info-icon'>
                            <i className='fas fa-ruler-vertical'></i>
                        </div>
                    </div>
                    <div className='girafe-card__info-stats'>
                            <input className='girafe-card__info-stat'
                                onChange={(e) => { props.onChange('sex', e.target.value)}}
                                value={props.girafe.sex}
                                readOnly={props.readOnly ? 'readonly' : ''}
                                placeholder='-'
                            />
                            <input className='girafe-card__info-stat'
                                onChange={(e) => { props.onChange('weight', e.target.value)}}
                                value={props.girafe.weight}
                                readOnly={props.readOnly ? 'readonly' : ''}
                                placeholder='-'
                            />    
                            <input className='girafe-card__info-stat'
                                 onChange={(e) => { props.onChange('height', e.target.value)}}
                                 value={props.girafe.height}
                                 readOnly={props.readOnly ? 'readonly' : ''}
                                 placeholder='-'
                            />
                    </div>
                </div>
                {/* /.girafe-card__image*/}
                <p className='girafe-card__characteristic'>
                    <strong className='girafe-card__prop'>Цвет: </strong> 
                    <input className='girafe-card__prop-val'
                        onChange={(e) => { props.onChange('color', e.target.value)}}
                        value={props.girafe.color}
                        readOnly={props.readOnly ? 'readonly' : ''}
                        placeholder=''
                    />
                </p>
                <p className='girafe-card__characteristic'>
                    <strong className='girafe-card__prop'>Диета: </strong> 
                    <input className='girafe-card__prop-val'
                        onChange={(e) => { props.onChange('diet', e.target.value)}}
                        value={props.girafe.diet}
                        readOnly={props.readOnly ? 'readonly' : ''}
                        placeholder=''
                    />
                </p>
                <p className='girafe-card__characteristic'><strong  className='girafe-card__prop'>Характер: </strong>
                    <input className='girafe-card__prop-val'
                        onChange={(e) => { props.onChange('temper', e.target.value)}}
                        value={props.girafe.temper}
                        readOnly={props.readOnly ? 'readonly' : ''}
                        placeholder=''
                    />
                </p>
                {props.children}
            </div>
        </form>
    );
}

function GirafeCard(props) {
    return (
        <div className='girafe-card'>
            <CardHeader {...props}>
                <i className='fas fa-ellipsis-h'></i>
            </CardHeader>
            <CardImage {...props} />
            <CardBody {...props} onChange={() => {}} readOnly={true}/>
            { props.edited && <EditPanel onDelete={props.onDelete} id={props.id}/>}
        </div>
    );
}

function EditableGirafeCard(props) {
    /* copy state frm props (editing purposes) */
    const [ state, setState] = useState(props);

    function handleOnChangle(prop, value){
        setState({...state, girafe: {...state.girafe, [prop]: value}});
    }

    return (
        <div className='girafe-card girafe-card--editable'>
            <CardHeader {...props}>
                <i className='fas fa-times'></i>
            </CardHeader>
            <CardImage {...props} />
            <CardBody {...state} onChange={handleOnChangle} >
                <button 
                    className='girafe-card__btn'
                    onClick={(e) => { e.preventDefault(); props.onClick(state.girafe);}}
                >Сохранить</button>
            </CardBody>
        </div>
    );
}

export {
    GirafeCard,
    EditableGirafeCard
}