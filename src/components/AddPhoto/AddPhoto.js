import React, {Component} from "react";
import './AddPhoto.scss';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addPostAction} from "../../redux/actionCreator";

class AddPhoto extends Component {

    handleSubmit = (event$) => {
        event$.preventDefault(); // preventing the form to reload the page upon clicks
        let submittedLink = event$.target.elements.linkCtrl.value;
        let submittedDesc = event$.target.elements.descriptionCtrl.value;
        if (!submittedLink || !submittedDesc) return;

        const post = {
            id: Number(new Date()),
            description: submittedDesc,
            imageLink: submittedLink
        }
        this.props.addPostAction(post);
        this.props.history.push("");
    }

    render() {
        return (
            <div>
                <h1>Add Photo</h1>
                <div className="add-form">
                    <form onSubmit={(event$) => this.handleSubmit(event$)}>
                        <input type="text" placeholder="Link" name="linkCtrl"/>
                        <input type="text" placeholder="Description" name="descriptionCtrl"/>
                        <div className="btn-container">
                            <button className="btn">
                                Post
                            </button>
                        </div>
                    </form>
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
    return bindActionCreators({addPostAction}, dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)