export default {
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
        boxShadow: '0 0 20px 9px #d6d6d6',
        borderRadius: '5px',
        width: '50%',
        margin: '20px auto',
    },
    img: {
        width: '100%',
        borderRadius: '5px 5px 0 0'
    },
    description: {
        margin: '2px auto'
    },
    title: {
        fontSize: '1.8em',
        fontWeight: 'bold',
        margin: '5px 0',
    },
    contentWrapper: {
        backgroundColor: 'white',
        borderRadius: '0 0 5px 5px'
    },
    content: {
        margin: 'auto 10px',
        '& h3': {
            margin: '10px 0'
        }
    },
    groupContainer: {
        '& p': {
            margin: '0.7em 0'
        }
    },
    btHome: {
        position: 'fixed',
        width: '50px',
        height: '50px',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#0C9',
        color: '#FFF',
        borderRadius: '50px',
        textAlign: 'center',
        boxShadow: '2px 2px 3px #999',
    },
    '@media (max-width: 1024px)': {
        root: {
            width: '90%'
        }
    }
}