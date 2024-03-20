import './Projects.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Project({projectImg1, projectImg2, projectName, tools, projectDescription, githubLink, projectWebsite}) {
  return (
    <div className='project-container'>
        <div className='project-images-container'>
          <Slider>
            <div  className='slider'>
              <img src={projectImg1} />
            </div>
            <div  className='slider'>
              <img src={projectImg2}/>
            </div>
          </Slider>
        </div>
  
        <div className='project-info'>
            <h3>{projectName}</h3>
            <div className='project-tools'>
              {tools.map((item, index) => (
                <div key={index}>
                {item.svg}
                <p>{item.svgName}</p>
              </div>
              ))}
            </div>
            <p>{projectDescription}</p>
            <div className='project-review-buttons'>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <button>Review the code</button>
              </a>
              <a href={projectWebsite} target="_blank" rel="noopener noreferrer">
                <button>See it live</button>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Project