import {Markup, MarkupView} from "./markup"
import * as p from "core/properties"

export class DivView extends MarkupView {
  model: Div

  render(): void {
    super.render()
    if (this.model.render_as_text)
      this.markupEl.textContent = this.model.text
    else
      this.markupEl.innerHTML = this.model.text
  }
}

export namespace Div {
  export type Attrs = p.AttrsOf<Props>

  export type Props = Markup.Props & {
    render_as_text: p.Property<boolean>
  }
}

export interface Div extends Div.Attrs {}

export class Div extends Markup {
  properties: Div.Props

  constructor(attrs?: Partial<Div.Attrs>) {
    super(attrs)
  }

  static initClass(): void {
    this.prototype.type = "Div"
    this.prototype.default_view = DivView

    this.define<Div.Props>({
      render_as_text: [ p.Boolean, false ],
    })
  }
}
Div.initClass()
