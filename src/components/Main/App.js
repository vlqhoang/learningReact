import React, {Component} from 'react';
import './App.scss';
import TitleComponent from "../Title/Title";
import PhotoWall from "../PhotoWall/PhotoWall";
import AddPhoto from "../AddPhoto/AddPhoto";
import {Route, Switch} from "react-router-dom";

class App extends Component{
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' render={() => (
                        <div>
                            <TitleComponent titleText={"Photowall"}/>
                            <PhotoWall />
                        </div>
                    )} />
                    <Route exact path="/create" component={AddPhoto}/>
                </Switch>
            </div>
        );
    }
}
export default App;
