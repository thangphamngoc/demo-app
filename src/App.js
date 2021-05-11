import React, { Suspense } from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import Calculator from "../src/components/page/Calculator/Calculator";

// Path
const APP_HOME = "/";
const APP_CALCULATOR = "/calculator";

// Components
// const Calculator = React.lazy(Calculator);

function App() {
  return (
    <div className="calculator">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Redirect exact from={APP_HOME} to={APP_CALCULATOR} />
            <Route path={APP_CALCULATOR} component={Calculator} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
