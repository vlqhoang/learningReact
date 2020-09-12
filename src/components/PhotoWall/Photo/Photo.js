import React from "react";

const Photo = (props) => (
    <figure>
        <img className="photo"
             src={props.post.imageLink}
             alt={props.post.description}
        />
        <figcaption>
            <p>{props.post.description}</p>
        </figcaption>
        <div className="btn-container">
            <button className="btn"
                    onClick={
                        () => {
                            props.onRemovePost(props.post.id)
                        }}>
                Remove
            </button>
        </div>
    </figure>
)
export default Photo