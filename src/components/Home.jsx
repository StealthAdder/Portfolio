import icon from '../static/images/icon-circle.png';
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
            <TextGlitch text={'Noah'} cycletime={2500} interval={15} />
          </h1>
          <p className='id-hash'>
            <TextGlitch text={'#'} cycletime={2500} interval={15} />
          </p>
          <p className='id-hash'>
            <TextGlitch text={'STEALTHADDER'} cycletime={2500} interval={10} />
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
            22 Yr Me! CS Engineering Graduate, Practising as Junior Dev/Intern @
            WorkPlay Studios
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
              marginTop: '5vh',
              marginBottom: '5vh',
            }}
            endIcon={<KeyboardDoubleArrowDownIcon />}
          >
            More
          </Button>
        </div>
        <Projects />
      </div>
    </>
  );
};

export default Home;
