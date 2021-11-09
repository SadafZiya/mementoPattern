/* eslint jsx-a11y/aria-role: 0 */
import React, {Suspense} from "react";
import MainLayout from "../../component/Public/MainLayout";
import {
    BrowserRouter as Router, Redirect, Route,
    Switch,
} from "react-router-dom";
import Loading from "../../microComponent/Loading";
import OriginatorOne from "../../component/Editor/OriginatorOne";
import OriginatorTwo from "../../component/Editor/OriginatorTwo";

const Routers = () => {
    return (
        <Router>
            <MainLayout>
                <Suspense fallback={<Loading/>}>
                    <Switch>
                        <Route exact path="/" component={OriginatorOne}/>
                        <Route path="/OriginatorTwo" component={OriginatorTwo}/>
                        <Route path="/OriginatorOne" component={OriginatorOne}/>

                        <Route path="*">
                            <Redirect to={'/'}/>
                        </Route>
                    </Switch>
                </Suspense>
            </MainLayout>
        </Router>
    );
};

export default Routers;
