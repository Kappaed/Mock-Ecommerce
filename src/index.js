import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store, { persistedStore } from "./store/index";
import { Provider } from "react-redux";
import ScrollIntoView from "./components/shared/ScrollIntoView";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollIntoView>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistedStore}>
            <App />
          </PersistGate>
        </Provider>
      </ScrollIntoView>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
