import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import './index.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <nav className="mdl-navigation mdl-layout--large-screen-only">
          <h1 className="mdl-layout-title">Bloc Jams</h1>
            <Link className="mdl-navigation__link" to='/'>Landing</Link>
            <Link Link className="mdl-navigation__link" to='/library'>Library</Link>
          </nav>          
        </div>
        </header>
  
        <main className="mdl-layout__content page-content">
           <Route exact path="/" component={Landing} />
           <Route path="/library" component={Library} />
           <Route path="/album/:slug" component={Album} />
         </main>
      
      </div>
    );
  }
}

export default App;
