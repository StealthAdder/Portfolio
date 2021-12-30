import styles from '../styles/Footer.module.css';
import { TextGlitch } from './TextGlitch';
import Chip from './Chip';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logoTitle}>
        <img
          className={styles.imgFooter}
          src='https://stealthadder.github.io/Portfolio/assets/icon-circle.png'
          alt=''
        />
        <h1 className={styles.dogTag}>
          <TextGlitch text={'Noah'} cycletime={2500} interval={15} />
        </h1>
        <p className={styles.idHash}>
          <TextGlitch text={'#'} cycletime={2500} interval={15} />
        </p>
        <p className={styles.idHash}>
          <TextGlitch text={'STEALTHADDER'} cycletime={2500} interval={10} />
        </p>
      </div>
      <div className={styles.footerBlk}>
        <p className={styles.footerDesc}>
          <TextGlitch text={'MERN Stack Dev'} cycletime={2500} interval={10} />
        </p>
        <div className={styles.contacts}>
          <Chip
            link='https://github.com/StealthAdder'
            label='Github'
            icon={<i class='fab fa-github'></i>}
          />
          <Chip
            link='https://stackoverflow.com/users/12732818/hariharan-parthiban?tab=profile'
            label='StackOverflow'
            icon={<i class='fab fa-stack-overflow'></i>}
          />
          <Chip
            link='https://discord.com/channels/@me/311065733641797633'
            label='Discord'
            icon={<i class='fab fa-discord'></i>}
          />
          <Chip
            link='mailto:hariharanp2435@gmail.com'
            label='Mail Me!'
            icon={<i class='fas fa-envelope'></i>}
          />
          <Chip
            link='https://twitter.com/StealthAdder'
            label='Twitter'
            icon={<i class='fab fa-twitter'></i>}
          />
          <Chip
            link='https://steamcommunity.com/profiles/76561198274358507'
            label='Steam'
            icon={<i class='fab fa-steam'></i>}
          />

          <Chip
            link='https://open.spotify.com/user/crbukrdk5iym9rkd1lk2hr22h'
            label='Spotify'
            icon={<i class='fab fa-spotify'></i>}
          />
          <Chip
            link='https://www.twitch.tv/zeo_noah'
            label='Twitch'
            icon={<i class='fab fa-twitch'></i>}
          />
        </div>
        <p
          style={{
            fontSize: '14px',
            color: '#00FF66',
            fontFamily: `'Audiowide', 'cursive'`,
          }}
        >
          <TextGlitch
            text={'>_ Designed & Built for StealthAdder'}
            cycletime={3000}
            interval={10}
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
