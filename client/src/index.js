import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "semantic-ui-css/semantic.min.css";
import ApplicationRouter from "./routing/ApplicationRouter";

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationRouter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
