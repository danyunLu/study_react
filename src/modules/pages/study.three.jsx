import React from 'react';
import '../styles/study.three.scss';

function ProductRow(props) {
    let data = props.data;
    let className = data.stocked ? 'normal' : 'warning';
    return data ? (
        <div>
            <label className={`product-row-name ${className}`}>{data.name}</label>
            <span className='product-row-value'>{data.price}</span>
        </div>
    ) : null
}

function ProductCategoryRow(props) {
    return (
        <div className='product-category'>
            <p>{props.category}</p>
        </div>
    )
}

function ProductTable(props) {
    return (
        <div>
            <div>
                <label className='title-name'>Name</label>
                <span className='title-value'>Price</span>
            </div>
            <div>
                {props.data && props.data.map((item) => {
                    return (
                        <div key={item.category}>
                            <ProductCategoryRow category={item.category} />
                            {item.products && item.products.map((productItem) => {
                                return <ProductRow key={productItem.name} data={productItem} />
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckoutChange = this.handleCheckoutChange.bind(this);
    }
    handleInputChange(e) {
        this.props.handleInputChange(e.target.value);
    }
    handleCheckoutChange(e) {
        this.props.handleCheckoutChange(e.target.checked);
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleInputChange} value={this.props.value} />
                <input type="checkbox" onChange={this.handleCheckoutChange} checked={this.props.stocked} />only in stock
            </div>
        )
    }
}

const productData = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
]

function formate(value, stocked) {
    let formateData = {}, result = [];
    let newProductData = stocked ? productData.map((item) => (item.stocked ? item : null)) : productData;
    newProductData = newProductData.filter(d => d);
    newProductData.map((item) => {
        let newItem = item;
        if (value) {
            newItem = null;
            if (item.name.indexOf(value) >= 0) {
                newItem = item;
            }
        }
        if (newItem && formateData[newItem.category]) {
            formateData[newItem.category].push(newItem);
        } else if (newItem) {
            formateData[newItem.category] = [newItem];
        }
    });
    for (let i in formateData) {
        result.push({
            category: i,
            products: formateData[i]
        })
    }
    return result;
}
export class FilterableProductTable extends React.Component {
    constructor() {
        super();
        this.state = {
            formateData: formate('', false),
            value: '',
            stocked: false,
        };
        this.handleCheckoutChange = this.handleCheckoutChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(value) {
        this.setState((old) => ({
            value: value,
            formateData: formate(value, old.stocked)
        }))
    }
    handleCheckoutChange(value) {
        this.setState((old) => ({
            stocked: value,
            formateData: formate(old.value, value)
        }))
    }
    render() {
        return (
            <div className='main-body'>
                <SearchBar
                    handleInputChange={this.handleInputChange}
                    handleCheckoutChange={this.handleCheckoutChange}
                    value={this.state.value}
                    stocked={this.state.stocked}
                />
                <ProductTable data={this.state.formateData} />
            </div>
        )
    }
}