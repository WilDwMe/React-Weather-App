import React from 'react';
import s from './Days.module.scss';

type Props = {}

export const Tabs = (props: Props) => {
    const tabs = [
        {
            value: 'На неделю'
        },
        {
            value: 'на 10 дней'
        },
        {
            value: 'На месяц'
        }
    ]

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map((tab) => {
                    return <div className={s.tab + ' ' + s.active} key={tab.value}>{tab.value}</div>
                })}
            </div>
            <div className={s.cancel}>Отменить</div>
        </div>
    )
}