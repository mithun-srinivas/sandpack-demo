import React from 'react'

function Header({handleFormat}) {
  return (
    <div>
        <button onClick={handleFormat}>Pretify</button>
    </div>
  )
}

export default Header