import React from 'react'

export default function Footer(props) {
    return (
        <div className="footer">
            <div className="div1">
                <h2>Filmi<span>Web</span></h2>
                <div>
                    {props.photos.map(photo=>
                    <img src={photo}/>)}
                </div>
            </div>
            <div className="div2">
                <h2>NEWS<span>FEED</span></h2>
                <p>Get instant notification whenever a
                new movie is uploaded on the site.Provide
                your mail below.Thank You</p>
                <form>
                    <input type="email" placeholder="Enter Your Mail" />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <div className="div3">
                <h2>CONTACT <span>US</span></h2>
                <ul>
                    <li>House No. 76,Vijay Nagar, Jaipur</li>
                    <li>+91 1234567890</li>
                    <li>mymail@whatever.com</li>
                </ul>
            </div>
        </div>
    )
}
