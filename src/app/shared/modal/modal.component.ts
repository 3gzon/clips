import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modalId = '';
  constructor(public modal: ModalService, public el: ElementRef) {}

  ngOnInit(): void {
    //specify with elementref the host
    document.body.appendChild(this.el.nativeElement);
  }
  closeModal() {
    this.modal.toggleModal(this.modalId);
  }
}
