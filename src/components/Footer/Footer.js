import React from "react";
import "./footer.css";

class Footer extends React.Component{
    render(props) {
        return(
            <footer>{this.props.title}</footer>
        )
    }
}

export default Footer;