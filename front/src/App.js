import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SearchBook from "./pages/book/SearchBook";
import "./App.css";
import BookDetail from "./pages/book/BookDetail";
import Main from "./pages/Main";
import LocationSearch from "./pages/user/LocationSearch";
import RecommendUser from "./pages/user/RecommendUser";
import SignIn from "./pages/user/SignIn";
import SignUp from "./pages/user/SignUp";
import Profile from "./pages/Profile";
import { useDispatch } from "react-redux";
import { getUserProfile } from "./actions/Users";
import ProfileUpdate from "./pages/Profile/ProfileUpdate";
import UserHistory from "./pages/Profile/UserHistory";
import ChangePassword from "./pages/Profile/ChangePassword";
import FollowerList from "./pages/Follow/FollowerList";
import FollowingList from "./pages/Follow/FollowingList";
import LocationSetting from "./pages/Main/LocationSetting";
import DealDetail from "./pages/Main/DealDetail";
import DealCreate from "./pages/deal/CreateDeal";

import Report from "./pages/Report";
import SearchUser from "./pages/SearchUser";
import ToastMessage from "./components/common/ToastMessage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // 내프로필 가져오기 여기선 2가 내 아이디로 가정
    dispatch(getUserProfile(2));
  }, []);

  return (
    <div className="App">
      <Router>
        <Route path="/" exact={true} component={Main} />
        <Route path="/location" exact={true} component={LocationSetting} />
        <Route path="/deal" exact={true} component={DealCreate} />
        <Route path="/deal/:dealId" exact={true} component={DealDetail} />
        <Route path="/signin" exact={true} component={SignIn} />
        <Route path="/signup" exact={true} component={SignUp} />
        <Route
          path="/search/location"
          exact={true}
          component={LocationSearch}
        />
        <Route path="/books" exact component={SearchBook} />
        <Route path="/books/:isbn" component={BookDetail} />
        <Route path="/recommend" exact={true} component={RecommendUser} />
        <Switch>
          <Route
            path="/profile/update"
            exact={true}
            component={ProfileUpdate}
          />
          <Route path="/profile/:id" exact={true} component={Profile} />
        </Switch>
        <Route path="/profile/history" exact={true} component={UserHistory} />
        <Route
          path="/profile/update/password"
          exact={true}
          component={ChangePassword}
        />
        <Route path="/following/list" exact={true} component={FollowingList} />
        <Route path="/follower/list" exact={true} component={FollowerList} />
        <Route path="/redbell/:dealId" exact={true} component={Report} />
        <Route path="/search/user" exact={true} component={SearchUser} />
      </Router>
      <ToastMessage />
    </div>
  );
}

export default App;
