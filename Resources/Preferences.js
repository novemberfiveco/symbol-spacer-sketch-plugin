import { h, render, Component } from 'preact'
import Portal from './Portal'
import pluginCall from 'sketch-module-web-view/client'

/** @jsx h */
class Preferences extends Component {
  constructor(props) {
    super(props)
    this.state = {
      preferences: window.preferences || {},
      ready: window.ready
    }
    if (!window.ready) {
      const interval = setInterval(() => {
        if (window.ready) {
          this.setState({
            preferences: window.preferences || {},
            ready: window.ready
          })
          clearInterval(interval)
        }
      }, 100)
    }
  }

  render (props, { ready, preferences }) {
    return (
      <div>
        <Portal>
          <button onClick={() => pluginCall('savePreferences', preferences)} className='save'>
            Save Preferences
          </button>
        </Portal>
        {!ready && 'loading...'}
        <h2>General preferences</h2>
        <div className='form'>
          <label htmlFor='spacerName'>spacerName</label>
          <input type='text' value={preferences.spacerName} id='spacerName' onInput={this.linkState('preferences.spacerName')} />
        </div>
        <div className='form'>
          <input type='checkbox' checked={preferences.renameSymbol} id='renameSymbol' onChange={this.linkState('preferences.renameSymbol')} />
          <label htmlFor='renameSymbol'>Rename layer name when switching symbols</label>
        </div>
      </div>
    )
  }
}

render(<Preferences />, document.getElementById('container'))
