import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardComp from './CardComp';
import { makeStyles } from '@mui/material/styles';
const Projects = () => {
  const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: '40px',
      paddingRight: '40px',
    },
  });
  return (
    <Grid Container>
      <Grid item xs={6}>
        <CardComp />
      </Grid>
      <Grid item xs={6}>
        <CardComp />
      </Grid>
    </Grid>
  );
};

export default Projects;
