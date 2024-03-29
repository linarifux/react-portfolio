import React from 'react'

const AboutBox = () => {
    return (
        <div className="about_boxes grid">
            <div className="about_box">
                <i className="about_icon icon-fire"></i>
                <div>
                    <h3 className="about_title">41</h3>
                    <span className="about_subtitle">Project completed</span>
                </div>
            </div>
            <div className="about_box">
                <i className="about_icon icon-cup"></i>
                <div>
                    <h3 className="about_title">9991</h3>
                    <span className="about_subtitle">Cup of coffee</span>
                </div>
            </div>
            <div className="about_box">
                <i className="about_icon icon-people"></i>
                <div>
                    <h3 className="about_title">30</h3>
                    <span className="about_subtitle">Satisfied Clients</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox