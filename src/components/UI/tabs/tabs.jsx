import React from "react";
import { connect } from "react-redux";
import {toggleTab} from '../../../features/ux'
import './tabs.scss'


class Tabs extends React.Component {

    render() {
        return (
            <nav>
                <div className="__tabs">
                    
                    <div className={`__tabs--content __cars ${this.props.tabActive === 0 ? 'active' : ''}`} onClick={()=>{this.props.toggleTab()}}>Comprar<br />Carros</div>
                    <div className={`__tabs--content __motos ${this.props.tabActive === 1 ? 'active' : ''}`} onClick={()=>{this.props.toggleTab()}}>Comprar<br />Motos</div>
                </div>
                <div className="__sell">
                    <button>Vender meu carro</button>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    tabActive: state.ux.tabActive
});

export default connect(mapStateToProps, { toggleTab })(Tabs);

