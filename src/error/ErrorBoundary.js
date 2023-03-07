import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    console.log(error.message);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p className="error">Something went wrongs !!!</p>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
