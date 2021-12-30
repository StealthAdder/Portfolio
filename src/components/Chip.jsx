import { motion } from 'framer-motion';
const Chip = ({ link, label, icon }) => {
  return (
    <motion.a
      href={link}
      target='_blank'
      rel=''
      whileTap={{ boxShadow: `-5px 5px 0 1px #00FF66` }}
      whileHover={{ boxShadow: `-5px 5px 0 1px #00FF66` }}
      style={{
        display: 'flex',
        padding: '0.8rem 0.8rem',
        height: 'fit-content',
        alignItems: 'center',
        width: 'fit-content',
        border: '1px solid #00FF66',
        color: '#00FF66',
        margin: '3vh 2vh 2vh 0vh',
      }}
    >
      {icon}
    </motion.a>
  );
};

export default Chip;
