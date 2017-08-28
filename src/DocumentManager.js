import { getUserPreferences } from './preferences'
import { findLayersNamedLike, selectLayersFromList, deselectAllLayers } from './helpers'
import { ModelClasses } from 'sketch-constants'

class DocumentManager {
  constructor(context) {
    this._context = context
    this._document = context.document
    this._command = context.command
    this._spacerName = getUserPreferences(this._context).spacerName
    this._selection = context.selection
  }

  toggleVisibility () {
    // if (!this._selection) {
      this._selection = selectLayersFromList(this._document, findLayersNamedLike(this._document, this._spacerName ))
    // }

    let loop = this._selection.objectEnumerator()
    let layer

    if (this._selection) {
      while (layer = loop.nextObject()) {
        if (layer.class() === MSSymbolInstance) {
          if (layer.style().contextSettings().opacity() > 0) {
            layer.style().contextSettings().setOpacity(0)
          } else {
            layer.style().contextSettings().setOpacity(1)
          }
        }
      }
    }

    deselectAllLayers(this._document)
  }
}

export default DocumentManager
