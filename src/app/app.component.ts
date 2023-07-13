import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IFlash } from './flash.model';
import { FlashService } from './flash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editing = false;
  editingId!: number;
  flash = {
    question: '',
    answer: '',
  };
  flashs$;

  @ViewChild('flashForm', { static: true }) flashForm!: NgForm;

  constructor(private flashService: FlashService) {
    this.flashs$ = this.flashService.flashs$;
  }

  trackByFlashId(index: number, flash: IFlash) {
    return flash.id;
  }

  handleSubmit(): void {
    this.flashService.addFlash(this.flash);
    this.handleClear();
  }

  handleClear() {
    this.flash = {
      question: '',
      answer: '',
    };
    this.flashForm.reset();
  }

  handleToggleCard(id: number) {
    this.flashService.toggleFlash(id);
  }

  handleDelete(id: number) {
    this.flashService.deleteFlash(id);
  }

  handleEdit(id: number): void {
    this.flash = this.flashService.getFlash(id);
    this.editing = true;
    this.editingId = id;
  }

  handleUpdate() {
    this.flashService.updateFlash(this.editingId, this.flash);
    this.handleCancel();
  }

  handleCancel() {
    this.editing = false;
    this.editingId = -1;
    this.handleClear();
  }

  handleRememberedChange({
    id,
    flag,
  }: {
    id: number;
    flag: IFlash['remembered'];
  }) {
    this.flashService.rememberedChange(id, flag);
  }
}
