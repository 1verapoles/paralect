import { useState, useCallback } from 'react';
import Appbar from './components/Appbar';
import Main from './components/Main';
import './App.css';



function App() {
  const [loading, setLoading] = useState(false);
  const [hideInitial, setHideInitial] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [userdata, setUserdata] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  const fetchData = useCallback(
    (searchValue) => {
      if (!hideInitial) setHideInitial(true);
      if (userNotFound) { setUserNotFound(false); }
      setLoading(true);
      fetch(`https://api.github.com/users/${searchValue}`)
        .then(response => response.json())
        .then(data => {
          setLoading(false);
          if (data.message === "Not Found") { setUserNotFound(true); }
          if (data.login) {
            setUserdata(data);
            fetch(`https://api.github.com/users/${searchValue}/repos`)
              .then(response => response.json())
              .then(repos => { if (repos.length) setUserRepos(repos); })
              .catch(e => console.error('Ошибка:', e));
          }
        })
        .catch(e => { setLoading(false); console.error('Ошибка:', e); });
    },
    [userNotFound]
  );

  return (
    <div className="App">
      <Appbar fetchData={fetchData} />
      <Main hideInitial={hideInitial} notfound={userNotFound} userdata={userdata} loading={loading} repos={userRepos} />
    </div>
  );
}

export default App;
