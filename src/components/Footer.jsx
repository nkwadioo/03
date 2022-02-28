import React from 'react'
import twitterLogo from './../assets/images/Twitter Icon.svg'
import facebookLogo from './../assets/images/Facebook Icon.svg'
import instaLogo from './../assets/images/Instagram Icon.svg'
import gitLogo from './../assets/images/GitHub Icon.svg'


export default function Footer() {  return (
    <footer>
        <img width="25px" src={twitterLogo} alt="Twitter Logo" />
        <img width="25px" src={facebookLogo} alt="Facebook Logo" />
        <img width="25px" src={instaLogo} alt="Instagram Logo" />
        <img width="25px" src={gitLogo} alt="GitHub Logo" />
    </footer>
)}