import './App.css';
import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [
  { option: 'Biologia' },
  { option: 'Química' },
  { option: 'Física' },
  { option: 'Matemática' },
  { option: 'História' },
  { option: 'Geografia' },
  { option: 'Filosofia' },
  { option: 'Gramática' },
  { option: 'Literatura' },
  { option: 'Redação' },
  
]

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }


  return (
    <>
    <div className='spin'>
      <Wheel
        
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#836FFF	', '#00BFFF	', '#7FFFD4', '#00FF00', '#B8860B	', '#9932CC', '#FFC0CB', '#B22222', '#FF8C00', '#FFD700	']}
        onStopSpinning={() => {
          setMustSpin(false)
        }}
      />
    </div>  
    <button className='btn' onClick={handleSpinClick}>SPIN</button>
    </>
  )
}