import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visibile: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}
  register(id: string) {
    this.modals.push({
      id,
      visibile: false
    });
    console.log(this.modals);
  }
  isModalOpen(id: string): boolean {
    return !!this.modals.find((element) => element.id === id)?.visibile;
  }

  toggleModal(id: string) {
    const modal = this.modals.find((element) => element.id === id);
    if (modal) {
      modal.visibile = !modal.visibile;
    }
  }
}
