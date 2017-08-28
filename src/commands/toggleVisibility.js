import DocumentManager from '../DocumentManager'

export default function onRun (context) {
  new DocumentManager(context).toggleVisibility()
}
