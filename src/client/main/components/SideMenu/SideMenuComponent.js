import React from 'react';
import './SideMenu.css';
import logo from './brand-logo.png';

function Brand({image, title, subtitle}){
    return (
        <div className='side-menu__brand'>
            <img src={image} className='side-menu__brand-logo'/>
            <h3 className='side-menu__brand-title'>{title}</h3>
            <h4 className='side-menu__brand-subtitle'>{subtitle}</h4>
        </div>
    );
}

export default function SideMenu(){
    return (
        <section className='side-menu'>
            <Brand image={logo} title='Ферма Заслуженных Жирафов' subtitle='Россия и СНГ'/>
            <nav className='side-menu__nav'>
                <a className='side-menu__nav-item' href="#">
                    <i class="fas fa-home side-menu__nav-icon"></i> Главная
                </a>
                <a className='side-menu__nav-item' href="#">
                    <i class="fas fa-tasks side-menu__nav-icon"></i> Управление
                </a>
                <a className='side-menu__nav-item side-menu__nav-item--active' href="#">
                    <i class="fas fa-horse-head"></i> Жирафы
                </a>
                <a className='side-menu__nav-item side-menu__nav-item--active' href="#">
                    <i class="fas fa-user-friends"></i> Сотрудники
                </a>
                <a className='side-menu__nav-item side-menu__nav-item--active' href="#">
                    <i class="fas fa-cog"></i> Настройки
                </a>
                <a className='side-menu__nav-item side-menu__nav-item--active' href="#">
                    <i class="fas fa-tools"></i> Поддержка
                </a>
            </nav>
        </section>
    );
}