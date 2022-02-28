import React from 'react'
import emailIcon from './../assets/images/Mail.svg'
import linkedInIcon from './../assets/images/LinkedIn.svg'

export default function Header() { return (
    <div className="header--container">
        <h3>Oscar Brice</h3>
        <p>Frontend Developer</p>
        <small>github.com/nkwadioo</small>
        <div className="buttons">
            <button className='btn-light'>
                <img src={emailIcon} alt="" />
                <span>Email</span>
            </button>
            <button className='btn-secondary'>
                <img src={linkedInIcon} alt="" />
                <span>LinkedIn</span>
            </button>
        </div>
    </div>
)}
