export default {
    root: {
        position: 'fixed',
        bottom: '20px',
        width: '700px',
        height: '40px',
        opacity: '0.9',
        margin: '0 auto',
        left: 0,
        right: 0,
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    btGroup: {
        display: 'flex',
        alignItems: 'center',
        '& button': {
            backgroundColor: '#27a69b',
            border: 'none',
            color: 'white',
            fontSize: '15px',
            borderRadius: '5px',
            padding: '10px 20px',
            cursor: 'pointer',
            transition: '0.2s',
            '&:hover': {
                backgroundColor: '#187564'
            },
            height: '100%',
            width: '200px',
            opacity: '0.95',
        }
    },
    '@media (max-width: 1024px)': {
        root: {
            height: '30px',
            width: '200px',
        },
        btGroup: {
            '& button': {
                fontSize: '12px',
                borderRadius: '5px',
                padding: '5px 7px',
                width: '80px',
            }
        },
    }
}