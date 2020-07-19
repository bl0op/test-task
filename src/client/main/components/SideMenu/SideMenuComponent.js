import React from 'react';
import './SideMenu.css';
import logo from './brand-logo.png';

function Brand({image, title, subtitle}){
    return (
        <div className='side-menu__brand'>
            <img src={image} className='side-menu__brand-logo'/>
            <div>
                <h3 className='side-menu__brand-title'>{title}</h3>
                <h4 className='side-menu__brand-subtitle'>{subtitle}</h4>
            </div>
        </div>
    );
}

export default function SideMenu(){
    return (
        <section className='side-menu'>
            <Brand image={logo} title='Ферма Заслуженных Жирафов' subtitle='России и СНГ'/>
            <nav className='side-menu__nav'>
                <a className='side-menu__nav-item' href='#'>
                    <i className='fas fa-home side-menu__nav-icon'></i>
                    <span className='side-menu__nav-text'>Главная</span>
                </a>
                <a className='side-menu__nav-item' href="#">
                    <i className="fas fa-tasks side-menu__nav-icon"></i>
                    <span className='side-menu__nav-text'>Управление</span>
                </a>
                <a className='side-menu__nav-item side-menu__nav-item--active' href="#">
                    <i className="fas fa-horse-head side-menu__nav-icon"></i>
                    <span className='side-menu__nav-text'>Жирафы</span>
                </a>
                <a className='side-menu__nav-item side-menu__nav-item' href="#">
                    <i className="fas fa-user-friends side-menu__nav-icon"></i>
                    <span className='side-menu__nav-text'>Сотрудники</span>
                </a>
                <a className='side-menu__nav-item side-menu__nav-item' href="#">
                    <i className="fas fa-cog side-menu__nav-icon "></i> 
                    <span className='side-menu__nav-text'>Настройки</span>
                </a>
                <a className='side-menu__nav-item side-menu__nav-item' href="#">
                    <i className="fas fa-tools side-menu__nav-icon"></i>
                    <span className='side-menu__nav-text'>Поддержка</span>
                </a>
            </nav>
        </section>
    );
}