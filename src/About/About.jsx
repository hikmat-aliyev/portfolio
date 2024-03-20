import './About.css'
import emoji2 from '../assets/emoji-img-2.png'
import emoji3 from '../assets/emoji-img-3.png'

function About() {
  return(
    <div id='about' className='about-page-container'>
      
      <div className='about-header-container'>
          <h3>About</h3>
          <span></span>
      </div>

      <div className='about-elements-container'>        

        <div>
         <img className='emoji-image' src={emoji3} alt="emoji-image" />
        </div>

        <div className='text-slide-container'>
          <p className='about-me-text'>
              Embracing a lifelong learning mindset, I am currently immersed in a Master's in Computer Science program 
              with a focused interest in web development. As a dedicated full-stack developer, I prioritize user-centric 
              design, specializing in crafting responsive layouts with the JavaScript stack, particularly React and 
              NodeJS.
          </p>

          <div className='slide-container'>
            <h3 className='i-am-header'>I am</h3>

            <div className="marquee">
                <span className='marquee-1st-text'>Full-stack JavaScript Developer - Full-stack JavaScript Developer -
                Full-stack JavaScript Developer -  Full-stack JavaScript Developer -&nbsp;&nbsp;&nbsp;</span>
            </div>

            <div className="marquee">
                <span className='marquee-2nd-text'>Front-end Developer - Front-end Developer -
                Front-end Developer -  Front-end Developer -&nbsp;&nbsp;&nbsp;</span>
            </div>

            <div className="marquee">
                <span className='marquee-3rd-text'>Server-side Engineer - Server-side Engineer -
                Server-side Engineer -  Server-side Engineer -&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About;