import React from "react";

class Users extends React.Component{
    render(props) {
        return(
            <div>
                <h4>{this.props.name}</h4>
                <p>{this.props.age} years</p>
            </div>
        )
    }
}

export default Users;