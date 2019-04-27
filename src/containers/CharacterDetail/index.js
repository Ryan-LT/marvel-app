import React, { Component } from 'react'
import withStyle from 'react-jss'
import { getCharacterDetail, getCharacterAdditionalData } from '../../apiHelper'
import Loading from '../../components/Loading'

import styles from './styles'

class CharacterDetail extends Component {
    state = {
        general: null,
        series: null,
        creators: null,
        characters: null,
        isDetailNull: false
    }

    componentDidMount() {
        getCharacterDetail(this.props.match.params.id).then(res => {
            const data = res.data.data.results[0];
            this.setState({ general: data });
            if (data.series.items.length !== 0) {
                getCharacterAdditionalData(data.series.collectionURI).then(res => {
                    const data = res.data.data.results;
                    this.setState({
                        series: data.slice(0, 5),
                        creators: data[0].creators.items.slice(0, 5),
                        characters: data[0].characters.items.slice(0, 3),
                    });
                })
            }
            else {
                this.setState({ isDetailNull: true })
            }
        });
    }

    render() {
        const classes = this.props.classes;
        return (
            <>
                {this.state.general ?
                    <div className={classes.root} >
                        <img className={classes.img} src={this.state.general.thumbnail.path + '.' + this.state.general.thumbnail.extension} alt='character' />
                        <div className={classes.contentWrapper}>
                            <div className={classes.content}>
                                <p className={classes.title}>{this.state.general.name.toUpperCase()}</p>
                                <p className={classes.description}>{this.state.general.description}</p>
                                {!this.state.isDetailNull ? <>
                                    <h3>From Series:</h3>
                                    <div className={classes.groupContainer}>
                                        {this.state.series ? this.state.series.map(item => {
                                            return (
                                                <p key={item.id} >{item.title} - Rating: {item.rating ? item.rating : 'n/a'}</p>
                                            )
                                        }) : <Loading />}
                                    </div>
                                    <h3>Creators</h3>
                                    <div className={classes.groupContainer}>
                                        {this.state.creators ? this.state.creators.map((item, index) => {
                                            return (
                                                <p key={index} >{item.name}</p>
                                            )
                                        }) : <Loading />}
                                    </div>
                                    <h3>Characters</h3>
                                    <div className={classes.groupContainer}>
                                        {this.state.characters ? this.state.characters.map((item, index) => {
                                            return (
                                                <p key={index} >{item.name}</p>
                                            )
                                        }) : <Loading />}
                                    </div>
                                </> : null}
                            </div>
                        </div>
                    </div>
                    : null}
                <a href='/'><div className={classes.btHome}><p>Home</p></div></a>
            </>
        )
    };
}

export default withStyle(styles)(CharacterDetail)