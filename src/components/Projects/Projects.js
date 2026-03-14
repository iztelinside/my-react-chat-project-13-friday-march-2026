import React from "react";

class Projects extends React.Component{
    render(props) {
        return(
            <div>
                <h4>{this.props.title}</h4>
                <p>{this.props.budget}$</p>
            </div>
        )
    }
}

export default Projects