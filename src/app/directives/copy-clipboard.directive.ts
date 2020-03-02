import { Directive, Input, Output, EventEmitter, HostListener } from "@angular/core";

@Directive({ selector: '[copy-clipboard]' })
export class CopyClipboardDirective {

  @Input("copy-clipboard")
  public payload: string;

  @Input("context")
  public context: string;
 
  @Output("copied")
  public copied: EventEmitter<string> = new EventEmitter<string>();

  @HostListener("click", ["$event"])
  public onClick(event: MouseEvent): void {
    console.log('bbbbbbbbbb')
    event.preventDefault();
    console.log('aaaaaa')
    if (!this.payload)
      return;
      console.log('cccccc')
    let listener = (e: ClipboardEvent) => {
    console.log('1')
      let clipboard = e.clipboardData || window["clipboardData"];
      console.log('2')
      clipboard.setData("text", this.payload.toString());
      e.preventDefault();
      this.copied.emit(this.payload);
    };

    document.addEventListener("copy", listener, false)
    document.execCommand("copy");
    document.removeEventListener("copy", listener, false);
  }
}