import React, { Component } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

export default class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };
  onIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  onDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value === 0) {
      this.setState({ counters });
    } else {
      counters[index].value--;
      this.setState({ counters });
    }
  };
  onDelete = (id) => {
    // const counters = this.state.counters.filter((c) => c.id != id);
    // this.setState({ counters });
  };
  onReset = () => {
    // const counters = this.state.counters.map((c) => {
    //   c.value = 0;
    //   return c;
    // });
    // this.setState({ counters });
  };
  totalCount = () => {
    // const count = this.state.counters.map(c);
  };
  render() {
    return (
      <>
        <NavBar totalCount={this}></NavBar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            onDelete={this.onDelete}
            onReset={this.onReset}
          ></Counters>
        </main>
      </>
    );
  }
}
