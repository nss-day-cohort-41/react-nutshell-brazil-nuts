import React from "react";
import "./Friend.css"

// The job of this component is to display a friend card. The code below defines what a single friend card should look like.

const FriendCard = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    {/* <img src={(props.friend.user.image)} alt="My Friend"/> */}
                    <h3>
                        <span className="card-friendname">{(props.friend.user.username)}</span>
                    </h3>
                </div>
                <div>
                <button
                    className="delete" 
                    type="button" 
                    onClick={() => props.deleteFriend(props.friend.id)}
                    >Delete
                </button>
                </div>
            </div>
        </>    
    )
}

export default FriendCard;