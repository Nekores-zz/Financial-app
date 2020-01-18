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
    '@media (max-width: 576px)': {
      alignItems: 'flex-start',
      height: '100%',
    },
    '@media (max-width: 1024px)': {
      height: '100%',
    },
  },

  container_box: {
    height: '60px',
    borderBottom: '1px solid #CACACA important',
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
      fontSize: '11px',
      height: '33px',
    },
  },
  paper_center_box: {
    '@media (max-width: 1024px)': {
      display: 'flex',
      justifyContent: 'center',
    },
    '@media (max-width: 576px)': {
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'center',
      height: '45.5vh',
    },
  },
  paper_center: {
    width: '100%',
    height: '100%',
    background: '#fff',
    textAlign: 'center',
    '@media (max-width: 1024px)': {
      marginTop: '5rem',
    },
    '@media (max-width: 992px)': {
      margin: '2rem auto',
      width: '80%',
    },
    '@media (max-width: 768px)': {
      width: '750px',
      margin: '0 auto',
      marginTop: '4.5rem',
    },
    '@media (max-width: 576px)': {
      width: '360px',
      height: '330px',
      margin: '1.4rem auto',
    },
    // '@media (max-width: 411px)': {
    //   margin: '3.4rem auto',
    // },
  },
  slide_true: {
    '@media (max-width: 1024px)': {
      marginLeft: '19rem !important',
      transition: '.13s ease-in-out',
    },
    '@media (max-width: 768px)': {
      marginLeft: '23rem !important',
    },
    '@media (max-width: 576px)': {
      marginRight: '-10rem',
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
      marginLeft: '-10rem',
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
    '@media (min-width: 1024px)': {
      height: '501px !important',
    },
    '@media (min-width: 768px)': {
      height: '500px',
    },
    '@media (max-width: 576px)': {
      height: '239px',
    },
  },

  draggable: {
    display: 'flex !important',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    '@media (max-width: 576px)': {
      height: '30px',
    },
  },

  cell_box_left: {
    width: '240px',
    borderRight: '1px solid #CACACA',
    '@media (max-width: 992px)': {
      width: '170px',
    },
    '@media (max-width: 768px)': {
      width: '186px',
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
    '@media (max-width: 768px)': {
      width: '191px',
    },
  },

  cell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '62.7px',
    borderBottom: '1px solid #CACACA',

    '@media (max-width: 1024px)': {
      // margin: '10px auto',
    },
    '@media (max-width: 992px)': {
      height: '58.3px',
      margin: '0',
    },
    '@media (max-width: 768px)': {
      margin: '0',
      height: '62.7px',
    },
    '@media (max-width: 576px)': {
      height: '29.9px',
      margin: '0',
    },
  },

  input_style: {
    paddingLeft: '18px',
    background: '#F1F0F0',
    border: '1px solid #CACACA',
    width: '100%',
    height: '42px',
    '@media (max-width: 992px)': {
      height: '38px',
    },
    '@media (max-width: 576px)': {
      paddingLeft: '13px',
      height: '20px',
      fontSize: '10px',
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
      fontSize: '10px',
    },
  },

  total_box: {
    width: '50%',
    padding: '1rem 0',
    borderRight: '1px solid #CACACA',
    '@media (max-width: 992px)': {
      padding: '.5rem 0',
    },
    '@media (max-width: 768px)': {
      padding: '1.5rem 0 ',
    },
    '@media (max-width: 576px)': {
      padding: '0.25rem 0 ',
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
      marginTop: '-1.1rem',
    },
    '@media (max-width: 576px)': {
      alignItems: 'flex-start',
      height: '21%',
    },
  },
}));

export default useStyles;
