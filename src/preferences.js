import fs from 'sketch-module-fs'
import prefsManager from 'sketch-module-user-preferences'
import { getPluginInfo, getPluginDirectory } from './helpers'

const PREFS_FILE = 'config.json'
const LOCAL_PREFS = {
  renameSymbol: true,
  spacerName: '@spacing'
}
const GLOBAL_PREFS = {}

export function getUserPreferences (context) {
  const keyPref = getPluginInfo(context).identifier + '.preferences'
  let localPrefs = {}
  try {
    var path = getPluginDirectory(context)
    localPrefs = JSON.parse(fs.readFile(path + '/' + PREFS_FILE))
  } catch (e) {
    console.log(e)
  }
  return Object.assign(
    {},
    LOCAL_PREFS,
    prefsManager.getUserPreferences(keyPref, GLOBAL_PREFS),
    localPrefs
  )
}

export function setUserPreferences (context, prefs) {
  const keyPref = getPluginDirectory(context).identifier + '.preferences'
  const localPrefs = {}
  const globalPrefs = {}
  Object.keys(prefs).forEach(k => {
    if (Object.keys(LOCAL_PREFS).indexOf(k) !== -1) {
      localPrefs[k] = prefs[k]
    } else {
      globalPrefs[k] = prefs[k]
    }
  })

  try {
    var path = getPluginDirectory(context)
    fs.writeFile(path + '/' + PREFS_FILE, JSON.stringify(localPrefs, null, '  '))
  } catch (e) {
    console.log(e)
  }
  return prefsManager.setUserPreferences(keyPref, globalPrefs)
}
