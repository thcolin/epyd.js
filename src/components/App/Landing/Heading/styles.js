import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: '1090px',
    textAlign: 'center',
    margin: '30px 10px 50px',
    '@media (max-width: 810px)': {
      margin: '0 5%'
    }
  },
  title: {
    color: 'white',
    fontSize: '4em',
    lineHeight: 1.1,
    fontWeight: 900,
    textTransform: 'uppercase',
    margin: '0 0 10px',
    '@media (max-width: 810px)': {
      fontSize: '3em'
    }
  },
  text: {
    color: 'white',
    fontSize: '1.3em',
    fontWeight: 200,
    fontStyle: 'italic',
    padding: '0 55px',
    margin: '0 0 10px',
    '@media (max-width: 810px)': {
      fontSize: '0.85em',
      padding: 0
    }
  }
})
