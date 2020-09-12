import React, {Component} from "react";
import './Photowall.scss';
import Photo from "./Photo/Photo";

import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {removePostAction} from "../../redux/actionCreator";

class PhotoWall extends Component {

    /**
     * Life cycle:
     * After the component get constructed and render to DOM -> 'componentDidMount' get invoked.
     * 1. -> constructor
     * 2. -> render(): running with empty obj
     * 3. -> componentDidMount()
     * 4. -> render(): re-render with new data
     */
    componentDidMount() {
        // this.setState({
        //     ...this.state,
        //     posts: data
        // });
    }

    /**
     * On btn add photo clicked, navigates to path '/create'
     */
    onAddPhotoBtnClicked = () => {
        this.props.history.push("create");
    }

    /**
     * On remove btn clicked, dispatch 'removePostAction' action via bound prop.
     */
    removePost = (postId) => {
        console.log(`Removing post having id of ${postId}`);
        this.props.removePostAction(postId);
    }

    render() {
        return (
            <div>
                <div className="add-icon-wrapper">
                    <button className="add-icon"
                            onClick={() => this.onAddPhotoBtnClicked()}/>
                </div>
                <div className="photo-grid">
                    {
                        this.props.posts.map(post => {
                            return <Photo key={post.id}
                                          post={post}
                                          onRemovePost={this.removePost} />
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state // getting posts data from the store's state
    }
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({removePostAction}, dispatch)
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoWall))