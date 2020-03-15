import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-approve-modal',
  templateUrl: './approve-modal.component.html',
  styleUrls: ['./approve-modal.component.scss']
})
export class ApproveModalComponent implements OnInit {

  @Input() minutes;
  @Output() close = new EventEmitter();
  constructor(
    public activeModal: NgbActiveModal,
    private _modalService: NgbModal) {}
  ngOnInit() {
  }
  closeModal() {
    // this._modalService.dismissAll('modal close');
    this.close.emit();
  }
}

