export default function AboutHero() {
  return (
    <>
      <div className="eyebrow"><span className="eyebrow-dot" /> OUR LITTLE CORNER OF THE INTERNET</div>
      <h1>Small things.<br /><em>Good feelings.</em></h1>
      <p className="about-lead">We believe the best kind of shopping leaves you smiling — and still with change in your pocket.</p>
      <div className="about-hero-image">
        <img src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1400&q=85" alt="A colourful selection of small gifts and everyday favourites" onError={(event) => { event.currentTarget.src = 'https://placehold.co/1400x600/f2e5d8/34302f?text=Small+things%2C+good+feelings' }} />
        <span>GOOD THINGS, FOR EVERYDAY PEOPLE <i>✳</i></span>
      </div>
    </>
  )
}
