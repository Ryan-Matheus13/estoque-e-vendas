import React, { Component } from "react";

type IHomeState = {
  loading: boolean;
};

export default class Home extends Component {
  state: IHomeState = {
    loading: true,
  };

  componentDidMount(): void {}

  componentDidUpdate(): void {}

  componentWillUnmount(): void {}
  render() {
    const { loading } = this.state;
    return <div>Olá, {loading}</div>;
  }
}
