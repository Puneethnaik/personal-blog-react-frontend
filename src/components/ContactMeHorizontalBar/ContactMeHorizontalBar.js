import React from 'react';
import './ContactMeHorizontalBar.css';

export default class ContactMeHorizontalBar extends React.Component {
    render() {
        return (
            <div className="contact-me-horizontal-bar-container">
                <span class="social-icon" id="facebook-icon"><i class="fab fa-facebook-f"></i></span>
                <span class="social-icon" id="twitter-icon"><i class="fab fa-twitter"></i></span>
                <span class="social-icon" id="linkedin-icon"><i class="fab fa-linkedin-in"></i></span>
                <span class="social-icon" id="instagram-icon"><i class="fab fa-instagram"></i></span>
            </div>
        )
    }
}