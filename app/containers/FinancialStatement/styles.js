import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    width: '950px',
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
    height: '50px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '16px',
    borderBottom: '1px solid #CACACA;',
    margin: 0,
  },

  paper_center: {
    width: '629px',
    height: '469px',
    background: '#fff',
    textAlign: 'center',
  },

  center_box: {
    display: 'flex',
  },

  left_grid: {
    display: 'flex',
    width: '316px',
    height: '330px',
  },

  cell_box_left: {
    width: '125px',
    borderRight: '1px solid #CACACA',
  },

  cell_box_right: {
    width: '191px',
    borderRight: '1px solid #CACACA',
  },

  cell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '47px',
    borderBottom: '1px solid #CACACA',
  },

  input_style: {
    paddingLeft: '10px',
    background: '#F1F0F0',
    border: '1px solid #CACACA',
    width: '170px',
    height: '30px',
  },

  input_style_calcu: {
    paddingLeft: '10px',
    background: '#F1F0F0',
    border: '1px solid #CACACA',
    width: '226px',
    height: '36px',
  },

  total_box: {
    marginRight: '6rem',
    marginLeft: '1rem',
  },

  label: {
    margin: 0,
    paddingBottom: '2px',
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
