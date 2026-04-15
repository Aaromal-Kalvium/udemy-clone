import { Component } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("Runtime error in App:", error, info);
    this.setState({ info });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, fontFamily: "system-ui, sans-serif", color: "#111" }}>
          <h1 style={{ color: "#b91c1c" }}>Application failed to render</h1>
          <pre style={{ whiteSpace: "pre-wrap", marginTop: 16 }}>{String(this.state.error)}</pre>
          {this.state.info?.componentStack && (
            <pre style={{ whiteSpace: "pre-wrap", marginTop: 16 }}>{this.state.info.componentStack}</pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

