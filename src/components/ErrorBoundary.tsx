import {Component,ReactNode} from "react";
import Error500 from "./error pages/Error500";

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
      return <Error500/>;
    }

    return this.props.children; 
}
}