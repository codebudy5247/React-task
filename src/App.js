import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Home from "./Components/Home"
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>

      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
    </QueryClientProvider>
  );
}

export default App;
