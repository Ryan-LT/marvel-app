import React, { Component } from 'react'
import withStyle from 'react-jss';

import styles from './styles'
import CharaterInforBoard from '../../components/CharacterInforBoard'
import { getListCharacter } from '../../apiHelper'
import Loading from '../../components/Loading'
import Footer from '../../components/Footer'

class CharaterDashboard extends Component {
    state = {
        data: null,
        page: 0,
        loading: true,
    }

    componentDidMount() {
        getListCharacter(10, this.state.page).then(res => {
            this.setState({
                data: res.data.data.results,
                loading: false
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            this.setState({ loading: true })
            getListCharacter(10, this.state.page).then(res => {
                this.setState({
                    data: res.data.data.results,
                    loading: false
                })
            })
        }
    }

    pageNextHandler = () => {
        this.setState({ page: this.state.page + 1 })
    }

    pagePrevHandler = () => {
        if (this.state.page > 0) {
            this.setState({ page: this.state.page - 1 })
        }
    }

    handleKeyPress = (e) => {
        if(e.key==='ArrowRight'){
            this.pageNextHandler()
        }
        else if(e.key==='ArrowLeft'){
            this.pagePrevHandler()
        }
    }

    render() {
        const classes = this.props.classes;
        return (
            <>
                <div onKeyUp={this.handleKeyPress} className={classes.root}>
                    {this.state.data && !this.state.loading ? this.state.data.map((item, index) => {
                        return <CharaterInforBoard
                            index={index + 1}
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            imageUrl={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                            id={item.id}
                        />
                    }) : <Loading />}
                </div>
                <Footer
                    nextPageClicked={this.pageNextHandler}
                    prevPageClicked={this.pagePrevHandler} />
            </>
        )
    }
}

export default withStyle(styles)(CharaterDashboard)