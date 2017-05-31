import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <header>
            <div className='head-title'>
                <h1>Mis Restaurantes</h1>
            </div>
            <div className='head-button'>
              <button>Add</button>
            </div>
          </header>
          <ul>
            <li>
              <img className='restaurant-img' src="/images/rest-1.png" alt="Tomahawk"/>
              <div className='restaurant-desc'>
                <h2>Tierra Criolla</h2>
                <p>Lorem ipsum dollor asimet est dollor</p>
              </div>

            </li>
            <li>
              <img className='restaurant-img' src="/images/rest-1.png" alt="Tomahawk"/>
              <div className='restaurant-desc'>
                <h2>Tierra Criolla</h2>
                <p>Lorem ipsum dollor asimet est dollor</p>
              </div>

            </li>
            <li>
              <img className='restaurant-img' src="/images/rest-1.png" alt="Tomahawk"/>
              <div className='restaurant-desc'>
                <h2>Tierra Criolla</h2>
                <p>Lorem ipsum dollor asimet est dollor</p>
              </div>

            </li>

          </ul>
        </nav>
        <section>
          <header>
            <div className='head-title'>
              <h1>Restaurante</h1>
            </div>
            <div className='head-button'>
              <button>Add</button>
            </div>
          </header>
          <ul>
            <li>
              <img src="/images/bacon-eggs.png" alt="bacon-eggs"/>
              <div className='food-action-holder'>
                <div>del</div>
                <div>3</div>
                <div>add</div>
              </div>
            </li>
            <li>
              <img src="/images/tomahawk.png" alt="bacon-eggs"/>
            </li>
            <li>
              <img src="/images/bacon-eggs.png" alt="bacon-eggs"/>

            </li>
            <li>
              <img src="/images/tomahawk.png" alt="bacon-eggs"/>
            </li>
            <li>
              <img src="/images/bacon-eggs.png" alt="bacon-eggs"/>

            </li>
            <li>
              <img src="/images/tomahawk.png" alt="bacon-eggs"/>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
