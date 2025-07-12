import React from 'react'
import './Lov.css';

function Lov() {
  return (
    <div>
      <div className="header">CSS-MASK BUTTON HOVER ANIMATION 
  ( Experimental )</div>

<div className="button-container-1">
  <span className="mas">MASK1</span>
  <button id='work' type="button" name="Hover">MASK1</button>
</div>

<div className="button-container-2">
  <span className="mas">MASK2</span>
  <button type="button" name="Hover">MASK2</button>
</div>

<div className="button-container-3">
  <span className="mas">MASK3</span>
  <button type="button" name="Hover">MASK3</button>
</div>

<div className="footer">Inspired by 
  <a href="https://tympanus.net/codrops/2016/09/29/transition-effect-with-css-masks/">this</a> codrops article
</div>

    </div>
  )
}

export default Lov
