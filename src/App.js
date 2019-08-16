import React, {lazy,Suspense } from 'react';
import { BrowserRouter as BRouter, Redirect, Route, Switch } from "react-router-dom";
import Tab from "./components/tab/tab";
import Loading from "./components/loading/loading";
import {connect } from "react-redux";
const Home = lazy(() => import("./pages/home/home/home"));
const Menu = lazy(() => import("./pages/menu/menu/menu"));
const Time = lazy(() => import("./pages/time/time/time"));
const TakeTea = lazy(() => import("./pages/takeTea/takeTea/takeTea"));
const Mine = lazy(() => import("./pages/mine/mine/mine"));
const Login = lazy(() => import("./components/login/login"));
const Notfund = lazy(() => import("./components/notfund/notfund"));
const Address = lazy(() => import("./pages/home/address/address"));
const Cart = lazy(() => import("./pages/cart/cart"));
function AppPage() {
    return (
        <div className="App">
            <BRouter>
                <Switch>
                    {/* <Route path="/" exact render={() => {
                        return <Redirect to="/home"/>
                    }} /> */}
                    <Redirect from = "/" exact to="/home"/>
                    <Route path="/home" exact component={Home} />
                    <Route path="/home/address" component={Address}/>
                    <Route path="/menu" component={Menu} />
                    <Route path="/cart" component={Cart}/>
                    <Route path="/time" component={Time}/>
                    <Route path="/taketea" component={TakeTea}/>
                    <Route path="/mine" component={Mine} />
                    <Route path="**" component={Notfund}/>
                </Switch>
                <Tab></Tab>
            </BRouter>
        </div>
    );
}
const App = (props) => {
    return (
        <Suspense fallback={<Loading/>}>
            {props.isToken ? <AppPage/> : <Login/>}
        </Suspense>
    )
}
const mapStateToProps = (state) => ({
    isToken: state.userReducer.isToken
})
const mapDispatchToProps = (dispatch) => ({
    
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
