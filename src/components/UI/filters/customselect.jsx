import React from "react";
import { connect } from "react-redux";
import {getMake} from '../../../services/index'
import { changeStringInfo } from '../../../features/filters'
import './filters.scss'

class CustomSelect extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
       this.getApi(this.props.type)
        
    }

    state = {
        modalState: false
    }

    async getApi(type) {
        if(type === 'brands') {
            const {data} = await getMake()
            console.log(data)
        }
    }

    toggleModal(condition) {
        this.setState({ modalState: condition })
    }

    sendDispatch(val) {
        this.props.changeStringInfo({ type: this.props.type, value: val })
        this.toggleModal({modalState:false})
    }

    render() {
        return (
            <>
                <div className="__customSelect" style={{ width: `${this.props.width}%` }} onClick={() => { this.toggleModal(true) }}>

                    <span className="title">{this.props.name}:</span>
                    <span >{this.props[this.props.type]}</span>
                    {this.props.lists[this.props.type].length > 0 ?
                        <div className={`__customSelect--modal ${this.state.modalState ? 'active' : ''}`}
                            onMouseLeave={() => { this.toggleModal(false) }}
                        >
                            {this.props.lists[this.props.type].map(val =>
                                <span onClick={() => {
                                    this.sendDispatch(val)                                    
                                }}>{val}</span>
                            )}
                        </div>
                        : null
                    }

                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => ({
    brand: state.filter.brand,
    model: state.filter.model,
    years: state.filter.years,
    priceRange: state.filter.priceRange,
    version: state.filter.version,
    space: state.filter.space,
    lists: state.filter.list
});

export default connect(mapStateToProps, { changeStringInfo })(CustomSelect);