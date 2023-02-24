import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import NewsSection from './components/NewsSection';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <div className = "main-section">
        {/* SideBar */}
        <SideBar className = "main-child1" />
        {/* FeedSection */}
        <Feed className = "main-child2" />
        {/* LinkedInNews */}
        <NewsSection className = "main-child3" />
      </div>
    </div>
  );
}

export default App;
