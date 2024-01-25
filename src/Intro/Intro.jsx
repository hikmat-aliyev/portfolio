import './Intro.css'

function Intro() {

  const handleScroll = () => {
    // Calculate the height of the viewport
    const viewportHeight = window.innerHeight + 30;

    // Scroll to the end of the viewport (next page)
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="intro-container">
      <h1 className='intro-name'>
        Hikmat Aliyev
      </h1>

      <h3 className='intro-description'>
        Tech enthusiast
      </h3>

      <span onClick={handleScroll} className="expand-icon material-symbols-outlined">
        expand_more
      </span>
    </div>
  )
}

export default Intro;
