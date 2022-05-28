import {Component,ReactNode} from "react";

interface State {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<ReactNode,State>{
    state:State={hasError:false};

    constructor(props: ReactNode) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

//   componentDidCatch(error, errorInfo) {
//     logErrorToMyService(error, errorInfo);
//   }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
}
}