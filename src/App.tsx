import React, { useState } from 'react';
import './App.css';
import { _CSS_ } from './css';

window.React = React;
const scriptGistUrl = 'https://gist.githubusercontent.com/nsrau/69a96359ae04b77862ff2a5d40ccb0b1/raw/0eb1aac2e946f429f39868bd7d9dd378e7e9c209/PluginGrid.js'

function App() {
  const [currentPlugin, setCurrentPlugin] = useState<any>(null)
  const [count, setCount] = useState(0)
  const [currentUrl, setCurrentUrl] = useState(scriptGistUrl)
  const [currentPluginName, setCurrentPluginName] = useState('PluginGrid')
  const [css, setCss] = useState(_CSS_)

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
        <label htmlFor="component">plugin css</label>
        <input
          id={'css'}
          type="text"
          style={{ width: '100%' }}
          onChange={(e) => setCss(e.target.value)}
          value={css}
        />
        <style
        dangerouslySetInnerHTML={{
          __html: css
        }}
        />
      </p>
      <p>
        app state count: {count}
      </p>

      <p>

        <b>another plugin 4 test</b>
        <br />
        <i><b>URL component:</b></i>
        <br />
        https://gist.githubusercontent.com/nsrau/1deb562e8df4f0a8517db36c7d2e020e/raw/770082dce1c0d80ae60d88ab43ecf33b5a75bd62/ExampleComponent.js
        <br />
        <i><b>plugin name:</b></i>
        <br />
        PluginOne

      </p>

      <p>
        <button
          onClick={getDynamicComponent}
        >load plugin</button>
      </p>

      <hr />

      <div className="pluginContainer">
        {currentPlugin}
      </div>
    </div>
  );
}

export default App;
