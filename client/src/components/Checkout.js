import StripeContainer from './StripeContainer'
import {useState} from 'react'
import './Checkout.css'


function Checkout() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className='checkout'>
      <h1>Teenage Engineering OP-1 Synthesizer</h1>
      {showItem ? <StripeContainer /> : <> <h3>$1299</h3> <img src="https://images.unsplash.com/photo-1560849915-481da5066045?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt='Synthesizer OP-1' /><button onClick={() => setShowItem(true)}>Purchase OP-1</button></>}
    </div>
  )
}

export default Checkout