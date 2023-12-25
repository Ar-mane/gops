import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./App";

const App = () => {
    return (
        <Router>
            <Route exact path="/rihab-elna-queen" render={() => <HomePage />} />

        </Router>
    );
};

export default App;