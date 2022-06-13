export class ModelsFactorie {
    constructor() {
        this.models = []
        this.brands = []
        this.versions = []
        this.space = space
        this.years = range
        this.priceRange = prices
    }

    getYears() {
        return this.years
    }

    getPricerange() {
        return this.priceRange
    }

    getModels() {
        return this.models
    }

    getVersions() {
        return this.versions
    }

    getBrands() {
        return this.brands
    }

    getSpace() {
        return this.space
    }

}

const prices = [
    'R$ 15.000 até R$ 30.000',
    'R$ 30.000 até R$ 60.000',
    'R$ 60.000 até R$ 200.000',
    'Acima de R$ 200.000'
]

const space = [
    '1KM',
    '10KM',
    '20KM',
    '30KM',
    '+30KM'
]

const range = [
    '1990',
    '1991',
    '1992',
    '1993',
    '1994',
    '1995',
    '1996',
    '1997',
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',

]