import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div>
        <span class="badge badge-warning sm m-2 ">
          {this.props.counter.value}
        </span>

        <button
          type="button"
          class="btn btn-primary sm m-2 "
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          type="button"
          class="btn btn-secondary sm m-2 "
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>
        <button
          type="button"
          class="btn btn-danger sm m-2 "
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
