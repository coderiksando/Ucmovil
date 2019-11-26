import { Component, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item-collapsable',
  templateUrl: './item-collapsable.component.html',
  styleUrls: ['./item-collapsable.component.scss'],
})
export class ItemCollapsableComponent implements OnInit {

  @Input() pagina: any;
  @ViewChild('BloqueColapsable', {static: true}) itemGroup: any;
  showSubmenu = false;

  constructor( private renderer2: Renderer2 ) { }

  ngOnInit() {
    this.renderer2.setStyle(this.itemGroup.el, 'webkitTransition', 'max-height 500ms');
    this.renderer2.setStyle(this.itemGroup.el, 'max-height', '0px');
  }

  mostrarItem() {
    if (this.showSubmenu) {
      this.renderer2.setStyle(this.itemGroup.el, 'max-height', '0px');
    } else {
      this.renderer2.setStyle(this.itemGroup.el, 'max-height', '500px');
    }
    this.showSubmenu = !this.showSubmenu;
  }

}
