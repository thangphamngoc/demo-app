import React from 'react';
import { connect } from 'react-redux';
import { addItems } from '../actions';
import axios from 'axios';

const App = ({ qty, dispatch }) => {
    let input, item;
    let state = {
        persons: []
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!input.value.trim()) { return }
    //     item = {
    //         text: input.value
    //     }
    //     dispatch(addItems(item));
    //     input.value = '';
    // }
    const componentDidMount = () => {
        axios.get(`https://5efabb3a80d8170016f758ee.mockapi.io/products`)
          .then(res => {
            const products = res.data;
            this.setState({ products });
          })
    }
    componentWillMount= () => {
        this.componentDidMount();
    };

    return (
        <div className={'wrapper'}>
            <h1>APP demo</h1>
            <div>
                <span> Product</span>
                <selector>
                { this.state.products.map(product => <option>{product.name}</option>)}
                </selector>
            </div>
            <div>
                <span> Date</span>
            </div>
            <div>
                <span>Locations</span>
            </div>
            <div>
                <span>Total Units</span>
            </div>
            <div>
                <span>Total Cost</span>
            </div>
            <table>

            </table>
            
            {/* <form onSubmit={handleSubmit} >
                <div className={'div-wrapper'}>
                    <label>APP</label>
                    <input type="text" name="name" ref={node => (input = node)} />
                </div>
                <div className={'div-wrapper'}>
                    <label>&nbsp;</label>
                    <input type="submit" value="Submit" />
                </div>
            </form> */}
        </div>
    )
}

export default connect()(App)