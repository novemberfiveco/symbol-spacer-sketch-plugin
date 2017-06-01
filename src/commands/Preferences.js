import WebUI from 'sketch-module-web-view'
import { getUserPreferences, setUserPreferences } from '../preferences'
import { executeSafely, getPluginInfo } from '../helpers'

export default function (context) {
  const preferences = getUserPreferences(context)
  const webUI = new WebUI(context, 'preferences.html', {
    identifier: getPluginInfo(context).identifier + '.preferences',
    width: 430,
    height: 300,
    onlyShowCloseButton: true,
    hideTitleBar: true,
    handlers: {
      savePreferences (prefs) {
        executeSafely(context, function () {
          setUserPreferences(context, prefs)
          webUI.panel.close()
          WebUI.clean()
          context.document.showMessage('Preferences updated')
        })
      }
    }
  })
  webUI.eval('window.preferences=' + JSON.stringify(preferences))
  webUI.eval('window.ready=true')
}
