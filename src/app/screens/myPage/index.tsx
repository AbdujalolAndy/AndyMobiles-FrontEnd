import React from "react";
import { Route, Switch } from "react-router-dom"
import OtherPage from "./otherPage"
import { MyPage } from "./myPage";


const MemberPage = () => {
    //Initializations

    return (
        <Switch>
            <Route path="/user-page/:userId">
                <OtherPage />
            </Route>
            <Route path="/user-page">
                <MyPage />
            </Route>
        </Switch>
    )
}

export default MemberPage;

