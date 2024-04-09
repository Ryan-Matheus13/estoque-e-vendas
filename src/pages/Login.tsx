import React, { Component } from "react";

type ILoginState = {
  loading: boolean;
};

export default class Login extends Component {
  state: ILoginState = {
    loading: true,
  };

  // antes de montar
  componentDidMount(): void {}

  // a cada renderização
  componentDidUpdate(): void {}

  // depois de desmontar
  componentWillUnmount(): void {}

  render() {
    const { loading } = this.state;
    return <div>Olá, {loading}</div>;
  }
}
