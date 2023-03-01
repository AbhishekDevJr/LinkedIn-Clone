import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import NewsSection from './components/NewsSection';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { selectUser } from './components/features/userSlice';
import Login from './Login';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <Header />
      {(!user) ? (<Login />) : (
      <div className = "main-section">
        {/* SideBar */}
        <SideBar className = "main-child1" />
        {/* FeedSection */}
        <Feed className = "main-child2" />
        {/* LinkedInNews */}
        <NewsSection className = "main-child3" />
      </div>
      )
      }
    </div>
  );
}

export default App;
