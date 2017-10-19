import { getUserPreferences } from './preferences'

class Resizer {
  constructor(context) {
    this._context = context
    this._document = context.document
    this._command = context.command
    this._spacerName = getUserPreferences(this._context).spacerName
    this._renameSymbol = getUserPreferences(this._context).renameSymbol

    if (context.actionContext) {
      this._selection = context.actionContext.oldSelection
      this._checkLayerName = true
    } else {
      this._selection = context.selection
      this._checkLayerName = false
    }
  }

  reset () {
    let loop = this._selection.objectEnumerator()
    let layer
    while (layer = loop.nextObject()) {
      if (layer.class() === MSSymbolInstance) {
        if (this._checkLayerName) {
          if (layer.name().indexOf(this._spacerName) > -1) {
            layer.resetSizeToMaster()
          }
        } else {
          layer.resetSizeToMaster()
        }

        if (this._renameSymbol && layer.name().indexOf(this._spacerName) > -1)  {
          layer.name = layer.symbolMaster().name()
        }
      }
    }
  }
}

export default Resizer
