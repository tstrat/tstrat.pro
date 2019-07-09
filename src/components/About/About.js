import React, { useState } from 'react';
import { GoQuote } from 'react-icons/go';
import './about.scss';
import aboutMe from './about.json';

function getRandomQuote(quotes) {
    let randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
}

function About(props) {
    const { about, quotes } = aboutMe; // from json
    const [ quote ] = useState(getRandomQuote(quotes));
    const header = about[0];
    const content = about.slice(1).map(sentence => <p>{ sentence }</p>)
    return (
        <div className='about'>
            <div className='about--quote'>
                <GoQuote id='first-quote'/>
                    <h1>{quote && quote.message}</h1>
                <GoQuote id='second-quote' style={{ transform: 'rotate(180deg)'}}/>
                <h2>- {quote.author}</h2>
            </div>
            <div className='about--content'>
            <h1 className='about--content--header'>{ header }</h1>
                <article className='about--content--paragraph'>
                    {content}
                    <p>
                        You can find more info about DevMountain from their site<b> </b>
                        <a href='https://devmountain.com/ux-bootcamp-immersive'>here</a>.
                    </p>
                </article>
            </div>
        </div>
    );
};

export default About;
