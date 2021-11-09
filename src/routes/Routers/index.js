/* eslint jsx-a11y/aria-role: 0 */
import React, {Suspense} from "react";
import MainLayout from "../../component/Public/MainLayout";
import {
    BrowserRouter as Router, Redirect, Route,
    Switch,
} from "react-router-dom";
import Loading from "../../microComponent/Loading";
import Editor from "../../component/Editor";

const Routers = () => {
    return (
        <Router>
            <MainLayout>
                <Suspense fallback={<Loading/>}>
                    <Switch>
                        <Route exact path="/" component={Editor}/>
                        <Route path="/editor" component={Editor}/>

                        <Route path="*">
                            <Redirect to={'/editor'}/>
                        </Route>
                    </Switch>
                </Suspense>
            </MainLayout>
        </Router>
    );
};

export default Routers;
