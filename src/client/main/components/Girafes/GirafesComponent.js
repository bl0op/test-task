import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as ActionsCreators from '../../redux/ActionCreators';
import { GirafeCard } from './GirafeCardComponent';
import './Girafes.css';

const mapStateToProps = (state) => {
    return {
        enclosures: state.enclosures,
        girafes: state.girafes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEnclosure : () => dispatch(ActionsCreators.addEnclosure()),
        addGirafe : (girafe, enclosureId) => dispatch(ActionsCreators.addGirafe(girafe, enclosureId))
    }
}

function Tab(props){
    return (
        <li 
        className={props.selected === props.id ? 'girafes__tab-item girafes__tab-item--active' : 'girafes__tab-item'}
         onClick={() => { props.onClick(props.id);}}>
            Вольер {props.id}
        </li>
    )
}

function TabBar(props){
    let tabs = [];
    if(props.enclosures.allIds.length === 0){
        tabs.push(
            <li key='0' className='girafes__tab-item'>
                Добавить вольер
            </li>
        )
    }
    else {
        tabs = props.enclosures.allIds.map((id) => (
            <Tab  key={id} id={id} onClick={props.onClick} selected={props.selected}/>
        ))
    }
    return (
        <div className='girafes__tab-bar'>
            <ul className='girafes__tabs'>
                {tabs}
            </ul>
            <button 
                className='girafes__add-enclosure-btn'
                onClick={props.addEnclosure}
            >
                <i className='fas fa-plus girafes__add-enclosure-icon'></i>
            </button>
        </div>
    );
}

function GirafesInfo(props){
    return (
        <div className='girafes__info'>
            <button className='girafes__hide-info-btn'>
                <i className='fas fa-times'></i>
            </button>
            <div className='girafes__info-title'>
                <span className='girafes__info-percent'>{props.fullness}%</span> Заполнение вольера
            </div>
            <div>
                <progress className='fullness-bar' value={props.fullness} max='100'></progress> <button className='btn btn--dark'> Информация</button>
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

    let firstTab = '';

    if (props.enclosures.allIds.length !== 0) {
        firstTab = props.enclosures.allIds[0];
    }

    const [selectedEnclosure, setSelectedEnclosure] = useState(firstTab); 
    const [editedGirafe, setEditedGirafe] = useState('-1');
    const [isAddingNew, setIsAddingNew] = useState(false);

    function selectTab(id) {
        setIsAddingNew(false);
        setSelectedEnclosure(id);
    }

    function editGirafe(id){
        console.log(id);
        if(id === editedGirafe){
            setEditedGirafe('-1');
        }
        else {
            setEditedGirafe(id);
        }
    }

    function getFullness(){
        let max = props.enclosures.byIds[selectedEnclosure].max;
        let girafeCount = props.girafes.allIds
                            .filter((id) => props.girafes.byIds[id].enclosureId === selectedEnclosure)
                            .length;
        return Math.floor(girafeCount/max*100);
    }

    if (props.enclosures.allIds.length === 0) {
        return (
            <div className='girafes'>
                <TabBar
                    enclosures={props.enclosures}
                    onClick={selectTab}
                    selected={selectedEnclosure}
                    addEnclosure={props.addEnclosure}
                />
            </div>
        )
    }
    else {
        return (
            <div className='girafes'>
                <TabBar
                    enclosures={props.enclosures}
                    onClick={selectTab}
                    selected={selectedEnclosure}
                    addEnclosure={props.addEnclosure}
                />
                <div className='girafes__header'>
                   <h2 className='girafes__title'>Жирафы</h2> 
                   <button className='girafes__add-btn' onClick={() => setIsAddingNew(true)} >
                       <i className='fas fa-plus  girafes__add-icon'></i>
                   </button>
                </div>
                <div className='girafes__cards'>
                    {/* card for adding new*/}
                    {
                        isAddingNew && 
                        <GirafeCard
                            key={'0'}
                            girafe={{ 
                            enclosureId: '',
                            name: '_',
                            weight: '-',
                            sex: '-',
                            height: '-',
                            color: '',
                            diet: '',
                            temper: '',
                            }}
                            onEdit={editGirafe}
                        />
                    }
                    {
                        props.girafes.allIds
                            .filter((id) => props.girafes.byIds[id].enclosureId === selectedEnclosure)
                            .map((id) => 
                                    <GirafeCard
                                        key={id.toString()}
                                        id={id}
                                        girafe={props.girafes.byIds[id]}
                                        onEdit={editGirafe}
                                        edited={editedGirafe === id}
                                    />
                            )
                    }
                    {/*props.enclosures
                        .filter(enclosure => enclosure.id === selectedEnclosure)[0]
                            .girafes.map((girafe) => 
                                <GirafeCard
                                    key={girafe.id.toString()}
                                    girafe={girafe}
                                    onEdit={editGirafe}
                                    edited={editedGirafe === girafe.id}
                                />
                            )
                    */}
                </div>
                <GirafesInfo  fullness={getFullness()}/>
                <Updates/>
            </div>
        );
    }
                            
}

export default connect(mapStateToProps, mapDispatchToProps)(Girafes);