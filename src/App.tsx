import React, { useState } from 'react';
import './App.css';
window.React = React
const scriptGistUrl = 'https://gist.githubusercontent.com/nsrau/5e9e6961ac11d8cefe3cd401d48ba6d7/raw/76d3a3f96bef78ae65b68fec52ddb500f470d5be/PluginTwo.js'

function App() {
  const [currentPlugin, setCurrentPlugin] = useState<any>(null)
  const [count, setCount] = useState(0)
  const [currentUrl, setCurrentUrl] = useState(scriptGistUrl)
  const [currentPluginName, setCurrentPluginName] = useState('PluginTwo')

  const getDynamicComponent = async () => {
    console.log('dynamic component')
    const res = await fetch(currentUrl)
    const text = await res.text()
    eval(text)
    const Plugin: any = (window as any)[currentPluginName];

    setCurrentPlugin(<Plugin count={count} handlerClick={(newCount: number) => setCount(newCount)} />)
  }

  return (
    <div>
      <h1 className="App">
        main APP
      </h1>
      <p>
        <label htmlFor="url">URL component</label>
        <input
          id={'url'}
          type="text"
          style={{ width: '100%' }}
          onChange={(e) => setCurrentUrl(e.target.value)}
          value={currentUrl}
        />
      </p>
      <p>
        <label htmlFor="component">plugin name</label>
        <input
          id={'component'}
          type="text"
          style={{ width: '100%' }}
          onChange={(e) => setCurrentPluginName(e.target.value)}
          value={currentPluginName}
        />
      </p>
      <p>
        app state count: {count}
      </p>

      <p>
        <code>
          another plugin 4 test
          https://gist.githubusercontent.com/nsrau/1deb562e8df4f0a8517db36c7d2e020e/raw/770082dce1c0d80ae60d88ab43ecf33b5a75bd62/ExampleComponent.js
          PluginOne
        </code>
      </p>

      <p>
        <button
          onClick={getDynamicComponent}
        >get plugin</button>
      </p>

      <hr />

      <div className="pluginContainer">
        {currentPlugin}
      </div>
    </div>
  );
}

export default App;
