import './About.css'
import emoji2 from '../assets/emoji-img-2.png'
import emoji3 from '../assets/emoji-img-3.png'

function About() {
  return(
    <div className='about-page-container'>
      <img className='emoji-image' src={emoji3} alt="emoji-image" />

      <div className='about-elements-container'>

        <div className='about-header-container'>
          <h3>About</h3>
          <span></span>
        </div>

        <p className='about-me-text'>
            Embracing a lifelong learning mindset, I am currently immersed in a Master's in Computer Science program 
            with a focused interest in web development. As a dedicated full-stack developer, I prioritize user-centric 
            design, specializing in crafting responsive layouts with the JavaScript stack, particularly React and 
            NodeJS.
        </p>

        {/* <div className='slide-container'>
          <h3>I am</h3>
          <div class="marquee-w">
              <div class="marquee">
                <span>Full-stack JavaScript Developer&nbsp;&nbsp;&nbsp;</span>
              </div>
              <div class="marquee marquee2">
                <span>Full-stack JavaScript Developer&nbsp;&nbsp;&nbsp;</span>
              </div>
          </div>
        </div> */}
        <div className='slide-container'>
          <h3>I am</h3>
          <div className="marquee-w">
            <div className="marquee">
              <span>Full-stack JavaScript Developer&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div className="marquee marquee2">
              <span>Full-stack JavaScript Developer&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;