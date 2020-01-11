import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    width: '100%',
  },

  main_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },

  title_center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '74px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '16px',
    borderBottom: '1px solid #CACACA;',
    margin: 0,
  },

  paper_center: {
    width: '100%',
    height: '650px',
    background: '#fff',
    textAlign: 'center',
  },

  center_box: {
    display: 'flex',
  },

  left_grid: {
    display: 'flex',
    width: '450px',
    height: '450px',
  },

  cell_box_left: {
    width: '214px',
    borderRight: '1px solid #CACACA',
  },

  cell_box_right: {
    width: '270px',
    borderRight: '1px solid #CACACA',
  },

  cell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '64.3px',
    borderBottom: '1px solid #CACACA',
  },

  input_style: {
    paddingLeft: '18px',
    background: '#F1F0F0',
    border: '1px solid #CACACA',
    width: '100%',
    height: '45px',
  },

  input_style_calcu: {
    paddingLeft: '18px',
    background: '#F1F0F0',
    border: '1px solid #CACACA',
    width: '100%',
    height: '52px',
  },

  total_box: {
    margin: '2rem 11.5rem 0 1rem',
    '@media (max-width: 780px)': {
      margin: '2rem 15.5rem 0 1rem',
    },
  },

  label: {
    margin: 0,
    paddingBottom: '2px',
    paddingLeft: '10px',
    textAlign: 'start',
    fontSize: '14px',
  },

  card: {
    margin: '8px',
    cursor: 'pointer',
  },

  calcutale_box: {
    height: '87px',
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
