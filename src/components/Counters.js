import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary sm m-2 "
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((item) => (
          <Counter
            key={item.id}
            counter={item}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}
