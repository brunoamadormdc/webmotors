import React from "react";
import { connect } from "react-redux";
import './filters.scss'


class Checkbox extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        checkstate: this.props.active,
    }


    toggleState() {
        this.props.changeState(this.state.checkstate, this.props.type)
        this.setState({ checkstate: !this.state.checkstate })

    }

    render() {
        return (
            <div className={`__checkbox ${this.state.checkstate ? '' : 'active'}`} onClick={() => { this.toggleState() }}>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    news: state.ux.news,
    used: state.ux.used,

});

export default connect(mapStateToProps)(Checkbox);