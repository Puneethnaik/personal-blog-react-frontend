import React from 'react';
import './ContactMeSideBar.css';


export default class ContactMeSideBar extends React.Component {
    render() {
        return (
            <div id = "contact-me-sidebar-social">
                <ul>
                    <a href = "#">
                        <li id = "contact-me-sidebar-facebook-icon" > 
                            <div className = "contact-me-sidebar-social-icon">
                                <span><i className="fab fa-facebook-f"></i></span>
                            </div>
                        </li>
                    </a>
                    <a href = "#" > 
                        <li id = "contact-me-sidebar-twitter-icon">
                            <div  className = "contact-me-sidebar-social-icon">
                                <span><i className="fab fa-twitter"></i></span>
                            </div>
                        </li>
                    </a>
                    <a href = "#" >
                        <li id = "contact-me-sidebar-instagram-icon">
                            <div  className = "contact-me-sidebar-social-icon">
                                <span><i className="fab fa-instagram"></i></span>
                            </div>
                        </li>
                    </a>
                    <a href = "#" >
                        <li id = "contact-me-sidebar-linkedin-icon">
                            <div  className = "contact-me-sidebar-social-icon">
                            <span><i className="fab fa-linkedin-in"></i></span>
                            </div>
                        </li>
                    </a>
                </ul>
            </div>
        )
    }
}