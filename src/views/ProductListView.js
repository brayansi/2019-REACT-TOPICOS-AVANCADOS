import React, { Component } from "react";
import { ProductService } from "../services/ProductService";
import { Channel } from "../services/EventService";
import ProductList from "../components/ProductList";
import {FormattedMessage} from 'react-intl';

class ProductListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    this.startData = this.startData.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.startData();
    Channel.on("product:remove", this.remove);
  }

  async remove(id) {
    const { products } = this.state;
    let productIndex = products.findIndex(product => product.id === id);
    await ProductService.remove(id);
    products.splice(productIndex, 1);
    this.setState({
      products
    });
  }

  async startData() {
    const products = await ProductService.list();
    this.setState({
      products
    });
  }

  render() {
    const { state } = this;
    return (
      <div>
        <h1><FormattedMessage id="List of Product" /></h1>
        <ProductList products={state.products} />
      </div>
    );
  }
}

export default ProductListView;
