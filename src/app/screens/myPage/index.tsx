import React from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom"
import {OtherPage} from "./otherPage"
import { MyPage } from "./myPage";
import "../../css/myPage.css"


const MemberPage = (props: any) => {
    //Initializations
    const member = useRouteMatch(),
        useQuery = () => {
            const { search } = useLocation();
            return React.useMemo(() => (new URLSearchParams(search)), [search])
        },
        chosen_mb_id: string | null = useQuery().get("mb_id") ?? null,
        chosen_art_id: string | null = useQuery().get("art_id") ?? null;
    return (
        <Switch>
            <Route path={`${member.path}/other`}>
                <OtherPage
                    mb_id={chosen_mb_id}
                    art_id={chosen_art_id}
                />
            </Route>
            <Route path={`${member.path}`}>
                <MyPage
                    reBuild={props.reBuild}
                    setRebuild={props.setRebuild}
                    art_id={chosen_art_id}
                />
            </Route>
        </Switch>
    )
}

export default MemberPage;

