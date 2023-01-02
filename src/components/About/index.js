import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Welcome!</h1>
            <div className="my-2">
                <p>
                    Thanks for stopping by my portfolio site. It's a bit drafty at the moment, but wanted to start sharing some projects from my full stack class. Outside of class I'm a product manager in NYC.
                </p>
            </div>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;