import Footer from "./components/Footer"
import Header from "./components/Header"
import './app.scss'
import React from "react"
import Items from "./components/items"
import ChairGrey from './assets/img/chairgrey.jpg'
import Table from './assets/img/table.jpg'
import Sofa from './assets/img/tableblack.jpg'
import Light from './assets/img/light.jpg'
import TableWhite from './assets/img/chairwhite.jpg'
import TableBlack from './assets/img/tablesblack.jpg'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [{
        id: 1,
        title: 'Стул серый',
        desc: 'Lorem ipsum dolor sit amet, consectetur.',
        img: ChairGrey,
        category: 'chairs',
        price: '49.99'
      },
      {
        id: 2,
        title: 'Стол',
        desc: 'Lorem ipsum dolor sit amet, consectetur.',
        img: Table,
        category: 'tables',
        price: '149.99'
      },
      {
        id: 3,
        title: 'Диван',
        desc: 'Lorem ipsum dolor sit amet, consectetur.',
        img: Sofa,
        category: 'sofa',
        price: '549.99'
      },
      {
        id: 4,
        title: 'Лампа',
        desc: 'Lorem ipsum dolor sit amet, consectetur.',
        img: Light,
        category: 'light',
        price: '25.00'
      },
      {
        id: 5,
        title: 'Стул белый',
        desc: 'Lorem ipsum dolor sit amet, consectetur.',
        img: TableWhite,
        category: 'chairs',
        price: '54.99'
      },
      {
        id: 6,
        title: 'Стол черный',
        desc: 'Lorem ipsum dolor sit amet, consectetur.',
        img: TableBlack,
        category: 'tables',
        price: '254.99'
      }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)

  }
  render() {
    return (
      <>
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Items items={this.state.items} onAdd={this.addToOrder} />
          <Footer />
        </div>
      </>
    )
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    this.setState(prevState => {
      const isInArray = prevState.orders.some(el => el.id === item.id)
      if (!isInArray) {
        return { orders: [...prevState.orders, item] }
      }
      return null;
    })
  }
}

export default App
