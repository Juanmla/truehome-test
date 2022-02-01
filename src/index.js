import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RoutesPages from "./routes/Routes";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <RoutesPages />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
