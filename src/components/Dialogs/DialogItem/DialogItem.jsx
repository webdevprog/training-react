import React from 'react';
import cls from '../dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={`${cls.dialog} ${cls.active}`}>
            <NavLink to={path}>
                <img className={cls.dialogImg} src={props.img} alt=""/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;