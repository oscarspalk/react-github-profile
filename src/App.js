import { useState, useEffect } from 'react';
import './App.css';
import config from './config'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Profile from './components/Profile';
import Repository from './components/Repository';
import RepositoryPage from './components/RepositoryPage';

function App() {

  let githubUsername = config.username;

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${githubUsername}`).then(e => e.json())
      .then(o => setRepos(o));

  }, [])



  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Profile username={githubUsername} />
            <h1>Featured Repositories:</h1>
            <div className="repo-con">
              {
                repos === [] ? "Loading" : repos.map((repo, index) =>
                  <Repository key={index} url={repo.link} description={repo.description} lang={repo.language} title={repo.repo} />
                )
              }
            </div>
          </div>
        </Route>
        <Route path="/repos/:id" render={(props) => {
          return (<RepositoryPage username={githubUsername} {...props} />)  
        }} />

      </Switch>
    </Router>
  );
}

export default App;
