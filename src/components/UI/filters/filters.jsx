import React from "react";
import { connect } from "react-redux";
import { toggleTab, changeCars } from '../../../features/ux'
import { changeStringInfo, clearFilters } from '../../../features/filters'
import Checkbox from '../filters/checkbox'
import CustomSelect from '../filters/customselect'
import './filters.scss'


class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.changeState = this.changeState.bind(this);
    }

    changeState(status, type) {
        this.props.changeCars({ status: status, type: type })
    }

    render() {
        return (
            <div className="__filters">
                {this.props.ad}
                <div className="__filters--row __chooseNew">
                    <Checkbox active={this.props.news} type="news" changeState={this.changeState}></Checkbox> <label>Novos</label>
                    <Checkbox active={this.props.used} type="used" changeState={this.changeState}></Checkbox> <label>Usados</label>

                </div>
                <div className="__filters--row __filters--content">
                    <div className="__box __raio">
                        <input type="text" placeholder={this.props.search.city} onChange={(e) => { this.props.changeStringInfo({ value: e.target.value, type: 'city' }) }} />
                        <CustomSelect width={'20'} type={'space'} name={'Raio'} service={'static'}></CustomSelect>
                    </div>
                    <div className="__box __twoSelect">
                        <CustomSelect width={'43'} type={'brands'} name={'Marca'} service={'api'}></CustomSelect>
                        <CustomSelect width={'43'} type={'models'} name={'Modelos'} service={'api'}></CustomSelect>

                    </div>

                </div>
                <div className="__filters--row __filters--content">
                    <div className="__box __twoSelect">
                        <CustomSelect width={'43'} type={'years'} name={'Ano desejado'} service={'static'}></CustomSelect>
                        <CustomSelect width={'43'} type={'priceRange'} name={'Faixa de Preço'} service={'static'}></CustomSelect>

                    </div>
                    <div className="__box __oneSelect">

                        <CustomSelect width={'100'} type={'versions'} name={'Versão'} service={'api'}></CustomSelect>
                    </div>

                </div>
                <div className="__filters--row __filters--content __filters--search">
                    <div className="__advancedsearch">
                        Busca Avançada
                    </div>
                    <div className="__viewoffers">
                        <div className="cleanfilters" onClick={() => { this.props.clearFilters() }}>Limpar Filtros</div>
                        <button>VER OFERTAS</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tabActive: state.ux.tabActive,
    news: state.ux.news,
    used: state.ux.used,
    search: {
        city: state.filter.city
    }

});

export default connect(mapStateToProps, { toggleTab, changeCars, changeStringInfo, clearFilters })(Filters);