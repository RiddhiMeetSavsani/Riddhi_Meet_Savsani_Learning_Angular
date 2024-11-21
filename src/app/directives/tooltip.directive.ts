import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {
  @Input() appTooltip: string = '';
  private tooltipElement: HTMLDivElement | null = null; // Element for the tooltip

  constructor(private el: ElementRef) {}

  // When the mouse enters the element, create and display the tooltip
  @HostListener('mouseenter') onMouseEnter() {
    this.createTooltip();
  }

  // When the mouse leaves the element, remove the tooltip
  @HostListener('mouseleave') onMouseLeave() {
    this.removeTooltip();
  }

  ngOnDestroy(): void {
    this.removeTooltip();
  }


  // Create the tooltip element and append it to the body
  private createTooltip() {
    if (this.appTooltip) {
      // Create the tooltip element
      this.tooltipElement = document.createElement('div');
      this.tooltipElement.textContent = this.appTooltip;

      // Style the tooltip element
      this.tooltipElement.style.position = 'absolute';
      this.tooltipElement.style.backgroundColor = 'black';
      this.tooltipElement.style.color = 'white';
      this.tooltipElement.style.borderRadius = '5px';
      this.tooltipElement.style.padding = '5px';
      this.tooltipElement.style.fontSize = '14px';
      this.tooltipElement.style.fontWeight='bold'
      this.tooltipElement.style.zIndex = '1000';

      // Position the tooltip near the target element

      //retrieves the element's size and position relative to the viewport.
      const rect = this.el.nativeElement.getBoundingClientRect();

      //Calculates the element's horizontal and vertical position relative to the whole page
      const left = rect.left + window.scrollX -50;
      const top = rect.top + window.scrollY +20;

      //Sets the tooltip's exact position on the page using the calculated coordinates.
      this.tooltipElement.style.left = `${left}px`;
      this.tooltipElement.style.top = `${top}px`;

      // Append the tooltip to the body
      document.body.appendChild(this.tooltipElement);
    }
  }

  // Remove the tooltip element
  private removeTooltip() {
    if (this.tooltipElement) {
      this.tooltipElement.remove();
      this.tooltipElement = null;
    }
  }
}
