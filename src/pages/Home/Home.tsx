import React, { useEffect } from 'react'
import { useCustomDispatch } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { Days } from './components/Days/Days';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';

type Props = {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(fetchCurrentWeather('paris'));
  }, []);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}