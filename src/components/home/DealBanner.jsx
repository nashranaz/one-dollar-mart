import { ArrowRight, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import CountdownTimer from '../deals/CountdownTimer'

export default function DealBanner() {
  return (
    <section className="deal-section" id="deals">
      <div className="deal-inner section-shell">
        <div className="deal-copy">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> THE LITTLE PRICE PARTY</div>
          <h2>Small price.<br /><span>Big happy.</span></h2>
          <p>That tiny “add to cart” feeling? We get it. Pick a little something that makes your day.</p>
          <Link className="button button-light" to="/shop">Shop under Rs. 299 <ArrowRight size={16} /></Link>
          <div className="deal-countdown"><Clock3 size={15} /><span>Next little deal in</span><CountdownTimer /></div>
        </div>
        <div className="deal-circles">
          <span className="price-bubble bubble-one">Rs. 99</span><span className="price-bubble bubble-two">Rs. 149</span>
          <span className="price-bubble bubble-three">Rs. 199</span><span className="price-bubble bubble-four">Rs. 249</span>
          <span className="price-bubble bubble-five">Rs. 299</span>
          <div className="deal-center">THE<br />LITTLE<br /><b>DEAL ZONE</b><span>✳</span></div>
          <div className="deal-doodle">good things<br />don't cost<br />a lot<span>↗</span></div>
        </div>
      </div>
    </section>
  )
}
