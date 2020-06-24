import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';

export const useRouts = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <MainPage />
            </Route>
        </Switch>
    )
}