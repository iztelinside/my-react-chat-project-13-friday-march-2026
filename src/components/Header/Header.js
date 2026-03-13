import React from "react";
import "./header.css";
function Header(props){
    return(
            <header>
                <h2>{props.title}</h2>
            </header>
    )
}
// class Header extends React.Component{
//     render(props) {
//         return(
//             <header>
//                 <h2>{props.title}</h2>
//             </header>
//         )
//     }
// }
export default Header;