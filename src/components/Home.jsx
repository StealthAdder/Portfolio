import icon from '../images/icon-circle.png';
import { TextGlitch } from './TextGlitch';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Projects from './Projects';
const Home = () => {
  return (
    <>
      <div className='header'>
        <div className='logo-title'>
          <img src={icon} alt='' />
          <h1 className='dog-Tag'>
            <TextGlitch text={'Noah'} cycletime={2500} />
          </h1>
          <p className='id-hash'>
            <TextGlitch text={'#'} cycletime={2500} />
          </p>
          <p className='id-hash'>
            <TextGlitch text={'STEALTHADDER'} cycletime={2800} />
          </p>
        </div>
      </div>
      <div className='main'>
        <div className='hero-title'>
          <h1>Hariharan Parthiban</h1>
          <p>
            <TextGlitch text={'Developer & Player'} cycletime={3000} />
          </p>
        </div>
        <div className='icons'>
          <i class='fab fa-js'></i>
          <i class='fab fa-node'></i>
          <i class='fab fa-react'></i>
          <i class='fab fa-vuejs'></i>
          <i class='fab fa-docker'></i>
          <i class='fas fa-server'></i>
          <i class='fas fa-terminal'></i>
          <i class='fab fa-github'></i>
        </div>
        <div className='description'>
          <p>Hey, Awesome that you found my profile!</p>
          <p>
            22 Yrs Me! CS Engineering Graduate, Practising as Junior Dev/Intern
            @ WorkPlay Studios
          </p>
          <p>
            Am a JavaScript Developer by passion. Click more to see on what am
            currently working on!
          </p>
          <Button
            variant='contained'
            style={{
              color: 'white',
              backgroundColor: '#00ff66b6',
              marginTop: '3vh',
            }}
            endIcon={<KeyboardDoubleArrowDownIcon />}
          >
            More
          </Button>
        </div>
        <div className='projects'>
          <h2 className='projectTitle'>Projects</h2>
          <p>Under Development</p>
          {/* <Projects /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
