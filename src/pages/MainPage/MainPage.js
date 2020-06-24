import React from 'react'
import classes from './MainPage.module.scss'
import { TopScreen } from '../../components/TopScreen/TopScreen'
import { BottomScreen } from '../../components/BottomScreen/BottomScreen'

export const MainPage = () => {
    return (
        <main className={classes.Main}>
            <TopScreen />
            <BottomScreen />
        </main>

    )
}