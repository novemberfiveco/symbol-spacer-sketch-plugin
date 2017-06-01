import Resizer from '../Resizer'

export default function onRun (context) {
  new Resizer(context).reset(true)
}
