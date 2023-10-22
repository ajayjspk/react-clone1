import React from 'react'
import SocicalIcons from './SocialIcons';

const Hero = () => {
    const socialStyle={
        color:'#9199b1'
    }
  return (
    <div>
        <div className='hero'>
            <div className="left">
                <div className='left-main'>
                    <h1>We’re here to help you at interviews</h1>
                    <p>We started Interview School to to help all of those who have 
                        walked out of an interview feeling like they were underprepared.</p>
                    <SocicalIcons style={socialStyle}/>
                </div>

            </div>
            <div className="right">
                <div>
                    <img className='coool' src='https://interviewschool.com/wp-content/uploads/2021/05/About-image-1.png' />
                    <img className='cool' src='https://interviewschool.com/wp-content/themes/is/assets/img/cool.png' />
                    <div className='timeline'>
                        <h3>Timeline </h3>
                        <ul>
                            <li>You should avoid words like <span>“things”</span></li>
                            <li><strong>“Hate” </strong>is not a good word to use</li>
                            <li>Keep using words like <strong>“passionate”</strong></li>
                            <li><strong>“Thrive”</strong> is a great word. Keep using it.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero;
