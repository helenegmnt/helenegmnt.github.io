import React from 'react' 
import "./User.css"
import HomeIcon from '@material-ui/icons/Home';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function User() {
    return (
        <div className="user">
            <img src="./images/helenegmnt_small.jpg" alt="avatar" className="user_avatar"/>
            <h1 className="user_name">Hélène Guilleminot</h1>
            <p className="user_profession">Développeuse Web Junior</p>
            <div className="user_infos">
                <p className="user_info">
                <HomeIcon className="special_icons" />75011 - Paris</p>
                <p className="user_info">
                <a href="tel:+33628584621">
                <LocalPhoneIcon className="special_icons" />0628584621</a>
                </p>
                <p className="user_info">
                <a href="mailto:helenegmnt@gmail.com">
                <MailIcon className="special_icons" />helenegmnt@gmail.com</a>
                </p>
                <p className="user_info">
                <a href="https://www.linkedin.com/in/helenegmnt" target="_blank">
                <LinkedInIcon className="special_icons" />@helenegmnt</a>
                </p>
            </div>
        </div>
    )
}
export default User