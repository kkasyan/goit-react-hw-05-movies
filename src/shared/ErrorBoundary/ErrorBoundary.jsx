import { Component } from 'react';

export class ErrorBoundary extends Component {
  state = { isError: false };

  static getDerivedStateFromError(error) {
    console.log(error.message);
    return { isError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    const { children, message } = this.props;
    const { isError } = this.state;

    if (isError) {
      return message;
    }
    return children;
  }
}
