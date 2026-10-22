import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const submit = (event) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <span className="form-kicker">DROP US A LINE <i>✳</i></span>
      {sent ? (
        <div className="form-success">
          <Check size={22} /><h2>Message received!</h2><p>Thanks for saying hello. We’ll be in touch soon.</p>
          <button type="button" className="text-link" onClick={() => setSent(false)}>Send another note <ArrowRight size={15} /></button>
        </div>
      ) : (
        <>
          <label>Your name<input required placeholder="What should we call you?" /></label>
          <label>Email address<input type="email" required placeholder="you@example.com" /></label>
          <label>Phone number <span>(optional)</span><input type="tel" placeholder="03170829257" /></label>
          <label>Your message<textarea required rows="4" placeholder="Tell us what's on your mind..." /></label>
          <button className="button button-dark">Send your message <ArrowRight size={16} /></button>
          <small className="form-footnote">We’ll get back to you as soon as we can. Pinky promise.</small>
        </>
      )}
    </form>
  )
}
