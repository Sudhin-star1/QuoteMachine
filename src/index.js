import {React , useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";

const App = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const x = Math.random()*100;
    
    const url = "https://type.fit/api/quotes";
    const randomQuotes = () => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setQuote(data[Math.ceil(x)].text)
            setAuthor(data[Math.ceil(x)].author)
        })
    }

    useEffect(() =>  {
        fetch(url)
        .then(response => response.json())
        .then(data =>  {
            setQuote(data[Math.ceil(x)].text)
            setAuthor(data[Math.ceil(x)].author)
    })
    },[])

    return( 
    <div id='quote-box'>
        <div id='text'>
            <p>{quote}</p>
        </div>
        <div id='author'>
            <p>{author} </p>
        </div>
        <button id='new-quote' onClick={randomQuotes}>New Quote</button>
        <a href='twitter.com/intent/tweet' target="_blank" id='tweet-quote'>Tweet Quote</a>
    </div>  
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);