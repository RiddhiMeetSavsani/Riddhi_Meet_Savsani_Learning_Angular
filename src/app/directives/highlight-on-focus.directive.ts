import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {

  @Input() appHighlightOnFocus= '' ;
  constructor(private el:ElementRef) { }

  @HostListener('focus') onFocus(){
    this.highlightHover(this.appHighlightOnFocus || 'lightpink')
  }

  @HostListener('blur') onBlur(){
    this.highlightHover('');
  }

  private highlightHover(color : string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
