export default {
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: '10px',
        margin: '10px',
        height: '250px',
        width: '550px',
        position: 'relative',
        transition: '0.5s',
        '&:hover': {
            boxShadow: '0px 0px 20px 0px #919191'
        }
    },
    imgWraper: {
        alignContent: 'center',
        alignSelf: 'center',
        margin: '20px'
    },
    img: {
        objectFit: 'cover',
        width: '150px',
        height: '200px',
        boxShadow: '0 0 20px 2px grey',
        borderRadius: '10px',
        border: '3px solid #363636'
    },
    content: {
        margin: '10px',
    },
    characterName: {
        fontWeight: 'bold'
    },
    description: {
        textAlign: 'justify',
        overflow: 'hidden',
        display: '-webkit-box',
        '-webkit-line-clamp': 4,
        '-webkit-box-orient': 'vertical',
        color: '#8a8a8a',
        marginRight: '10px'
    },
    BtDetail: {
        position: 'absolute',
        right: '15px',
        bottom: '15px',
        backgroundColor: '#27a69b',
        border: 'none',
        color: 'white',
        fontSize: '20px',
        borderRadius: '25px',
        padding: '10px 20px',
        cursor: 'pointer',
        boxShadow: '0px 0px 20px 0px grey',
        transition: '0.2s',
        '&:hover': {
            backgroundColor: '#187564'
        }
    },
}