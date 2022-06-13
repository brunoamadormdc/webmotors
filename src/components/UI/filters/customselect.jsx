import React from "react";
import { connect } from "react-redux";
import { getMake, getModel, getVersion } from '../../../services/index'
import { changeStringInfo, changeStringApiInfo, setLists } from '../../../features/filters'
import './filters.scss'

class CustomSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalState: false,
            width: this.props.width
        }
    }

    componentDidMount() {
        if (this.props.type === 'brands') {
            this.getBrands(this.props.type)
        }
        this.verifyWidth()

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        
        if(this.props.type === 'versions') {
            if(prevProps.fields.models.id != this.props.fields.models.id) {
                this.getVersions(this.props.fields.models.id)
            }
            
        }
        if(this.props.type === 'models') {
            if(prevProps.fields.brands.id != this.props.fields.brands.id) {
                this.getModels(this.props.fields.brands.id)
            }
        }
    }

    

    verifyWidth () {
        window.addEventListener('resize',(e)=>{
            if(e.target.window.innerWidth < 600) {
                this.setState({width:'100'})
            }
            if(e.target.window.innerWidth > 600) {
                this.setState({width:this.props.width})
            }
            
        })
    }

    async getBrands() {
        const { data } = await getMake()
        this.props.setLists({ value: data, type: this.props.type })
        
    }

    async getModels(makeID) {
        const { data } = await getModel(makeID)
        this.props.setLists({ value: data, type: this.props.type })
    }

    async getVersions(modelID) {
        const { data } = await getVersion(modelID)
        this.props.setLists({ value: data, type: this.props.type })
    }

    toggleModal(condition) {
        this.setState({ modalState: condition })
    }

    sendDispatch(val) {
        this.props.changeStringInfo({ type: this.props.type, value: val })
        this.toggleModal({ modalState: false })
    }

    sendDispatchApi(val) {
        this.props.changeStringApiInfo({ type: this.props.type, name: val['Name'], id:val['ID'] })
        this.toggleModal({ modalState: false })
    }

    apiComponent() {
        return (
            <>
            <span >{this.props.service === 'api' && this.props.lists[this.props.type].length > 0  ? 
                    this.props.fields[this.props.type].name : ''}</span>
            <div className={`__customSelect--modal ${this.state.modalState ? 'active' : ''}`}
                onMouseLeave={() => { this.toggleModal(false) }}
            >
                {this.props.lists[this.props.type].map(val =>
                    <span onClick={() => {
                        this.sendDispatchApi(val)
                    }}>{val['Name']}</span>
                )}
            </div>
            </>

        )
    }
    staticComponent() {
        return (
            <>
            <span >{this.props.fields[this.props.type]}</span>
            <div className={`__customSelect--modal ${this.state.modalState ? 'active' : ''}`}
                onMouseLeave={() => { this.toggleModal(false) }}
            >
                {this.props.lists[this.props.type].map(val =>
                    <span onClick={() => {
                        this.sendDispatch(val)
                    }}>{val}</span>
                )}
            </div>
            </>
        )
    }

    render() {
        return (

            <div className="__customSelect" style={{ width: `${this.state.width}%` }} onClick={() => { this.toggleModal(true) }}>

                <span className="title">{this.props.name}:</span>
               
                {this.props.lists[this.props.type].length > 0 && this.props.service === 'api' ? this.apiComponent() : null  }
                {this.props.lists[this.props.type].length > 0 && this.props.service === 'static' ? this.staticComponent() : null  }

            </div>


        )
    }
}

const mapStateToProps = (state) => ({
    fields: {
        brands: state.filter.brands,
        models: state.filter.models,
        years: state.filter.years,
        priceRange: state.filter.priceRange,
        versions: state.filter.versions,
        space: state.filter.space,
    },
    lists: state.filter.list
});

export default connect(mapStateToProps, { changeStringInfo, changeStringApiInfo, setLists })(CustomSelect);