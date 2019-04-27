export default {
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        listStyle: 'none',
        justifyContent: 'center',
        marginTop: '10px',
        marginBottom: '60px'
    },
    searchInput: {
        position: 'fixed',
        zIndex: '1',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 150,
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: 20,
        fontSize: 16,
        backgroundImage: "url('https://www.w3schools.com/howto/searchicon.png')",
        backgroundPosition: '10px 10px',
        backgroundRepeat: 'no-repeat',
        padding: '12px 20px 12px 40px',
        WebkitTransition: 'width 0.5s ease-in-out',
        transition: 'width 0.5s ease-in-out',
        transitionProperty: 'opacity,width',
        opacity: '0.5',
        '&:focus': {
            width: '300px',
            opacity: '0.9'
        },

    }
}