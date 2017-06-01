import update from 'sketch-module-update'
import { setIconForAlert } from '../helpers'

const repoFullName = 'novemberfiveco/symbol-spacer-sketch-plugin'

const options = {
  title: 'A new version is available!',
  customizeAlert: setIconForAlert
}

export default update(repoFullName, options)
