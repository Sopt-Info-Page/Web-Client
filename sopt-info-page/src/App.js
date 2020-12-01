import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/footer/Footer'; //
import GlobalNav from './components/nav/GlobalNav';
import Main from './pages/main/Main';
import Member from './pages/member/Member';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalNav />
        <Switch>
          {/* exact : path에 따라 맞는 컴포넌트 출력 */}
          <Route exact path="/" component={Main} /> {/* 메인 화면 */}
          <Route path="/member" component={Member} /> {/* 멤버 리스트 출력 */}
          <Route path="*">
            {/* 404 페이지 */}
            <h1> 404 NOT FOUND </h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
