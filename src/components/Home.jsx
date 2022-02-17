import { TextGlitch } from './TextGlitch'
import Button from '@mui/material/Button'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import Projects from './Projects'
import Footer from './Footer'
import { useRef } from 'react'
const Home = () => {
  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop, { behavior: 'smooth' })
  }
  // General scroll to element function
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  return (
    <>
      <div className='header'>
        <div className='logo-title'>
          <img
            src='https://stealthadder.github.io/Portfolio/assets/icon-circle.png'
            alt='ICON'
          />
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
          <p className='workDesc'>
            <TextGlitch text={'Developer & Player'} cycletime={3000} />
          </p>
        </div>
        <div className='icons'>
          <i class='fab fa-js'></i>
          <i class='fab fa-node'></i>
          <i class='fab fa-docker'></i>
          <i class='fas fa-server'></i>
          <i class='fas fa-terminal'></i>
          <i class='fab fa-github'></i>
          <i class='fab fa-react'></i>
          <i class='fab fa-vuejs'></i>
        </div>
        <div className='description'>
          <p style={{ fontSize: '24px' }}>nuqneH?👋 {'W_W, '}</p>
          <p>
            22 Yr Me! CS Engineering Graduate, Practising as Backend Engineer @
            iNeuron.ai
          </p>
          <p>
            Am a NodeJS Developer by choice!. Click more to see on what am
            currently working on!
          </p>
          <p>
            I play games, watch anime casually and am sucker for Formulae One
            (F1),
          </p>
          <p>
            Mercedes AMG Series, SpaceX Falcon rockets & Merlin Engines, Occupy
            mars,
          </p>
          <p>and the future of the universe!</p>
          <p style={{ fontStyle: 'italic', margin: '10px 0px' }}>
            "You can always edit a bad page. You can’t edit a blank page."
          </p>
          <p>
            {"tlho' - "}
            <TextGlitch
              text={`It's Klingon for Thanx!`}
              style={{ display: 'inline-block' }}
              cycletime={3500}
            />
          </p>
          <Button
            variant='contained'
            style={{
              color: 'white',
              backgroundColor: '#00ff66b6',
              marginTop: '4vh',
              marginBottom: '4vh',
            }}
            onClick={executeScroll}
            endIcon={<KeyboardDoubleArrowDownIcon />}
          >
            More
          </Button>
        </div>
        <div ref={myRef}>
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
