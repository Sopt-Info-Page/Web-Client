import './App.scss';
import Footer from "./components/footer/Footer"; //
import GlobalNav from "./components/nav/GlobalNav";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <b>
          ON SOPT <br />
          DESIGN TEAM
        </b>
        엄서영 현주희 정재현 이현진 화이팅 !
      </header> */}
      <GlobalNav/> 
      <Footer />
    </div>
  );
}

export default App;
