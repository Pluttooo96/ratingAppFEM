import React, { useState } from 'react'
import './App.css';

function App() {
  const [submited, setSubmited] = useState(false)
  const [rate, setRate] = useState(0)


  if (submited===false){
    return (
      <div className='box'>
        <div className='stars'>
          <img className='star' src='images/icon-star.svg' alt='star' />
        </div>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering</p>
        <div className='ratings'>
          <button className='rating' onClick={() => (setRate(1))}>1</button>
          <button className='rating' onClick={() => (setRate(2))}>2</button>
          <button className='rating' onClick={() => (setRate(3))}>3</button>
          <button className='rating' onClick={() => (setRate(4))}>4</button>
          <button className='rating' onClick={() => (setRate(5))}>5</button>
        </div>
        <button className='submit' disabled={!rate} onClick={() => (setSubmited(true))}>
          SUBMIT
        </button>
      </div>
    );
  }else{
    return (
      <div className='box'>
        <img className='thank-img' src='images/illustration-thank-you.svg' alt='thank-you' />
        <div className='feedback'>You selected {rate} out of 5</div>
        <h1 className='second'>Thank You!</h1>
        <p className='second'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    );
  }
}

export default App;
