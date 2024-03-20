import friendSyncLogin from '../assets/friendSync-login.png'
import friendSyncHome from '../assets/friendSync-home.png'
import eCommerceFront from '../assets/e-commerce-front.png'
import eCommerceBack from '../assets/e-commerce-back.png'
import memoryCardFront from '../assets/memory-card-front.png'
import memoryCardBack from '../assets/memory-card-back.png'
import brainwaveFront from '../assets/brainwaveFront.png'
import brainwaveBack from '../assets/brainwaveBack.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css'
import { mongoDB, nodeJS, express, react, javaScript, css, html, tailwindCSS} from '../ProjectTools/ToolsSVGs'
import Project from './Project'

function Projects() {

  return(
    <div className='projects-page'>

      <div className='projects-header-container'>
        <h3>Projects</h3>
        <span></span>
      </div>

      <div className='projects-container'>

        <Project projectName={'FriendSync'} 
                projectImg1={friendSyncHome} 
                projectImg2={friendSyncLogin}
                projectDescription={"A fully functional social media app where users can connect with others by sending friend requests, share posts about their lives, like and comment to other users' posts. This app is developed by using MERN stack."}
                tools={[react, nodeJS, mongoDB, express]}
                projectWebsite={'https://friend-sync.vercel.app/'}
                githubLink={'https://github.com/hikmat-aliyev/friend-sync2'}
                />
        
        <Project projectName={'Brainwave landing page'} 
                projectImg1={brainwaveFront} 
                projectImg2={brainwaveBack}
                projectDescription={"Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general."}
                tools={[react, tailwindCSS, javaScript]}
                projectWebsite={'https://brainwave-cyan.vercel.app/'}
                githubLink={'https://github.com/hikmat-aliyev/brainwave-landing-page'}
                reverse={true}/> 

        <Project projectName={'Gasper'} 
                projectImg1={eCommerceFront} 
                projectImg2={eCommerceBack}
                projectDescription={"An e-commerce website where users can search for different products, see information about them, and add it to the basket to proceed the order. This app is developed by using React framework."}
                tools={[react, html, css, javaScript]}
                projectWebsite={'https://e-commerce-app-one-sage.vercel.app/'}
                githubLink={'https://github.com/hikmat-aliyev/e-commerce-app'}
                /> 
        
        <Project projectName={'Rick and Morty game'} 
                projectImg1={memoryCardFront} 
                projectImg2={memoryCardBack}
                projectDescription={"Memory card game where you have to choose the card only once, otherwise you lose. There are 3 difficulty levels. This app is developed by vanilla JS, CSS, HTML and React framework."}
                tools={[react, html, css, javaScript]}
                projectWebsite={'https://github.com/hikmat-aliyev/memory-card-game'}
                githubLink={'https://github.com/hikmat-aliyev/memory-card-game'}
                reverse={true}/> 
        
      </div>
    </div>
  )
}

export default Projects;