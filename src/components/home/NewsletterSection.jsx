import { ArrowRight } from 'lucide-react'

export default function NewsletterSection() {
  const subscribe = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    window.alert('You’re on the list — watch your inbox for a little happy!')
  }
  return (
    <section className="newsletter-section section-shell">
      <div className="newsletter-card">
        <span className="newsletter-spark">✳</span>
        <div><div className="eyebrow">A LITTLE NOTE FROM US</div><h2>Good things in your inbox.</h2><p>New finds, happy deals, zero boring stuff.</p></div>
        <form onSubmit={subscribe}><input type="email" required placeholder="Your email address" aria-label="Email address" /><button className="button button-dark">Count me in <ArrowRight size={16} /></button></form>
      </div>
    </section>
  )
}
