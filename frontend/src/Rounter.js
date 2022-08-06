import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { UserInfoPage } from './pages/UserInfoPage'
import Login from "./Components/Login/Login";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <UserInfoPage />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}