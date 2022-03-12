import React, { useState, useEffect } from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/globalSvgSelector';
import { Weather } from '../../../../store/types/type';
import moment from 'moment';
import s from './ThisDay.module.scss';

interface Props {
    weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {

    const [time, setTime] = useState(moment().format('HH:mm:ss'));

    useEffect(() => {
        setInterval(() => {
            setTime(moment().format('HH:mm:ss'));
        }, 1000);
    })

    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
                    <div className={s.this__day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id="sun" />
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>Время: <span>{time}</span></div>
                <div className={s.this__city}>Город: <span>{weather.name}</span></div>
            </div>
        </div>
    )
}