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
    '@media (max-width: 576px)': {
      fontSize: '12px',
      height: '33px',
    },
  },

  paper_center: {
    width: '100%',
    height: '100%',
    background: '#fff',
    textAlign: 'center',
    '@media (max-width: 992px)': {
      margin: '2rem auto',
      width: '80%',
    },
    '@media (max-width: 768px)': {
      width: '750px',
      margin: '0 auto',
      marginTop: '-12rem',
    },
    '@media (max-width: 576px)': {
      width: '360px',
      margin: '0 auto',
      marginTop: '-18rem',
    },
    '@media (max-width: 411px)': {
      marginTop: '-14rem',
    },
    '@media (max-width: 380px)': {
      marginTop: '-10rem',
    },
  },
  slide_true: {
    '@media (max-width: 1024px)': {
      marginRight: '-11rem',
      transition: '.13s ease-in-out',
    },
  },
  slide_false: {
    '@media (max-width: 1024px)': {
      marginRight: '0',
      transition: '.13s ease-in-out',
    },
  },
  slide_Two_true: {
    '@media (max-width: 1024px)': {
      marginLeft: '-11rem',
      transition: '.13s ease-in-out',
    },
  },
  slide_Two_false: {
    '@media (max-width: 1024px)': {
      marginLeft: '0',
      transition: '.13s ease-in-out',
    },
  },

  center_box: {
    display: 'flex',
  },

  left_grid: {
    display: 'flex',
    width: '450px',
    height: '514px',
    '@media (max-width: 576px)': {
      height: '290px',
    },
  },

  cell_box_left: {
    width: '214px',
    borderRight: '1px solid #CACACA',
    '@media (max-width: 992px)': {
      width: '170px',
    },
    '@media (max-width: 576px)': {
      width: '80px',
    },
  },

  cell_box_right: {
    width: '270px',
    borderRight: '1px solid #CACACA',
    '@media (max-width: 576px)': {
      width: '100px',
    },
  },

  cell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '64.3px',
    borderBottom: '1px solid #CACACA',
    '@media (max-width: 992px)': {
      height: '58.3px',
    },
    '@media (max-width: 576px)': {
      height: '32.3px',
    },
  },

  input_style: {
    paddingLeft: '18px',
    background: '#F1F0F0',
    border: '1px solid #CACACA',
    width: '100%',
    height: '45px',
    '@media (max-width: 992px)': {
      height: '38px',
    },
    '@media (max-width: 576px)': {
      height: '20px',
    },
  },

  input_style_calcu: {
    width: '70% !important',
    height: '52px',
    paddingLeft: '18px',
    background: '#F1F0F0',
    border: '1px solid #CACACA',
    '@media (max-width: 576px)': {
      height: '24px',
      fontSize: '12px',
    },
  },

  total_box: {
    width: '50%',
    padding: '1rem 0',
    borderRight: '1px solid #CACACA',
    '@media (max-width: 992px)': {
      padding: '.5rem 0',
    },
  },

  label: {
    margin: 0,
    paddingBottom: '2px',
    paddingLeft: '71px',
    textAlign: 'start',
    fontSize: '14px',
    '@media (max-width: 576px)': {
      fontSize: '8px',
      paddingLeft: '30px',
      paddingTop: '24px',
      lineHeight: 0,
    },
  },

  card: {
    margin: '8px',
    cursor: 'pointer',
  },

  calcutale_box: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      marginTop: '-2.5rem',
    },
    '@media (max-width: 576px)': {
      marginTop: '-3rem',
    },
  },
}));

export default useStyles;
