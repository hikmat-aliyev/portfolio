import friendSyncLogin from '../assets/friendSync-login.png'
import friendSyncHome from '../assets/friendSync-home.png'
import scraperFront from '../assets/priceeyefront.png'
import scraperBack from '../assets/priceeyeback.png'
import memoryCardFront from '../assets/memory-card-front.png'
import memoryCardBack from '../assets/memory-card-back.png'
import brainwaveFront from '../assets/brainwaveFront.png'
import brainwaveBack from '../assets/brainwaveBack.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css'
import { mongoDB, nodeJS, express, react, javaScript, css, html, tailwindCSS, nextJS, typeScript} from '../ProjectTools/ToolsSVGs'
import Project from './Project'

function Projects() {

  return(
    <div className='projects-page'>

      <div className='projects-header-container'>
        <h3>Projects</h3>
        <span></span>
      </div>

      <div className='projects-container'>
        
      <Project projectName={'Amazon Web Scraper'} 
                projectImg1={scraperFront} 
                projectImg2={scraperBack}
                projectDescription= {(
                  <>
                    A web application that allows users to search and track Amazon products, receiving real-time updates on stock and price changes. Built with <strong>Next.js</strong> for seamless performance, utilizing <strong>Bright Data</strong> for web scraping, and <strong>cron-job.org</strong> to schedule periodic product updates.
                  </>
                )}
                tools={[nextJS, typeScript, tailwindCSS]}
                projectWebsite={'https://amazon-webscraperr.vercel.app/'}
                githubLink={'https://github.com/hikmat-aliyev/amazon-scraper'}
                /> 

        <Project projectName={'FriendSync'} 
                projectImg1={friendSyncHome} 
                projectImg2={friendSyncLogin}
                projectDescription={(
                  <>
                    A fully functional social media application where users can connect by sending friend requests, share posts, and engage with others by liking and commenting on posts. Built with the <strong>MERN</strong> stack for seamless, full-stack development.
                  </>
                )}
                tools={[react, nodeJS, mongoDB, express]}
                projectWebsite={'https://friend-sync.vercel.app/'}
                githubLink={'https://github.com/hikmat-aliyev/friend-sync2'}
                reverse={true}/>
        
        <Project projectName={'Brainwave landing page'} 
                projectImg1={brainwaveFront} 
                projectImg2={brainwaveBack}
                projectDescription={(
                  <>
                    Brainwave - Modern UI/UX website, developed using <strong>React.js</strong> and <strong>Tailwind CSS</strong>, exemplifies modern <strong>UI/UX</strong> principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.
                  </>
                )}
                tools={[react, tailwindCSS, javaScript]}
                projectWebsite={'https://brainwave-cyan.vercel.app/'}
                githubLink={'https://github.com/hikmat-aliyev/brainwave-landing-page'}
               /> 

        
        <Project projectName={'Rick and Morty game'} 
                projectImg1={memoryCardFront} 
                projectImg2={memoryCardBack}
                projectDescription= {(
                  <>
                    A memory card game where players must select each card only once—choosing a card twice results in a loss. The game features three difficulty levels and is built using vanilla <strong>JavaScript,</strong> <strong>CSS,</strong> <strong>HTML</strong> and <strong>React</strong>.
                  </>
                )}
                tools={[react, html, css, javaScript]}
                projectWebsite={'https://rickandmortymemogame.netlify.app/'}
                githubLink={'https://github.com/hikmat-aliyev/memory-card-game'}
                reverse={true}/> 
        
      </div>
    </div>
  )
}

export default Projects;