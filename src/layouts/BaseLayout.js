import React from 'react'
import BottomNav from '../components/BottomNav'
import { Switch, Route } from "react-router-dom";
import OrderPage from '../pages/OrderPage';
import FavoritePage from '../pages/FavoritePage';
import ProfilePage from '../pages/ProfilePage';
const BaseLayout = () => {
    return (
        <div>
            <Switch>
                <Route path="/order">
                    <OrderPage />
                </Route>
                <Route path="/favorite">
                    <FavoritePage />
                </Route>
                <Route path="/profile">
                    <ProfilePage />
                </Route>

            </Switch>
            <BottomNav />

        </div>
    )
}

export default BaseLayout
