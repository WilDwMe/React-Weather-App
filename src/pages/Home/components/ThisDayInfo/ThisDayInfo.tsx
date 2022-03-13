import React, { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../../../hooks/store';
import { selectCurrentWeatherData } from '../../../../store/selectors';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';

type Props = {}

export interface Item {
    icon_id: string;
    name: string;
    value: string;
}

export const ThisDayInfo = (props: Props) => {

    const { weather } = useCustomSelector(selectCurrentWeatherData);

    useEffect(() => {
        console.log(weather);
    });

    const precipitation = weather.weather[0].description[0].toUpperCase() + weather.weather[0].description.slice(1);

    const windDirection = (num: number) => {
        const value = Math.round(num / 22.5)
        const directions = ['Северный', 'Северный, Северо-восточный', 'Северо-восточный', 'Восточный, Северо-восточный', 'Восточный',
            'Восточный, Юго-восточный', 'Юго-восточный', 'Южный, Юго-восточный', 'Южный', 'Южный, Юго-западный', 'Юго-западный',
            'Западный, Юго-западный', 'Западный', 'Западный, Северо-западный', 'Северо-западный', 'Северный, Северо-западный'];
        const index = value % 16;
        return directions[index];
    };

    const directionSting = windDirection(weather.wind.deg);

    const items = [{
        icon_id: 'temp',
        name: 'Температура',
        value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`
    },
    {
        icon_id: 'pressure',
        name: 'Давление',
        value: `${weather.main.pressure} мм ртутного столба - нормальное`
    },
    {
        icon_id: 'precipitation',
        name: 'Осадки',
        value: `${precipitation}`
    },
    {
        icon_id: 'wind',
        name: 'Ветер',
            value: `${weather.wind.speed} м/с ${directionSting}`
        }];

    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {items.map((item: Item) => <ThisDayItem key={item.icon_id} item={item} />)}
            </div>
            <img className={s.cloud__img} src={cloud} alt="облако" />
        </div>
    )
}