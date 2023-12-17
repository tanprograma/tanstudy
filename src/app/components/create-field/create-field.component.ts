import { Component, OnInit } from '@angular/core';
import { Field } from 'src/interfaces';

import {
  faEdit,
  faSave,
  faFolderOpen,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FieldService } from 'src/app/services/field.service';
@Component({
  selector: 'app-create-field',
  templateUrl: './create-field.component.html',
  styleUrls: ['./create-field.component.css'],
})
export class CreateFieldComponent implements OnInit {
  loading = false;
  deleteIcon = faTimes;
  editIcon = faEdit;
  saveIcon = faSave;
  openIcon = faFolderOpen;

  fields: Field[] = [];
  created_Fields: Field[] = [];

  field: string = '';
  constructor(private fieldService: FieldService) {}
  ngOnInit(): void {
    this.getFields();
  }
  getFields() {
    this.loading = true;
    this.fieldService.getFields().subscribe((fields) => {
      this.fields = fields;
      this.loading = false;
    });
  }
  add() {
    const found = this.fields.find((i) => {
      return i.name == this.field.toLowerCase();
    });
    if (found) return;
    this.created_Fields.splice(0, 0, {
      name: this.field,
    });
    this.clear();
  }
  clear() {
    this.field = '';
  }
  deleteAll() {
    this.created_Fields = [];
  }
  deleteOne(item: Field) {
    this.created_Fields = this.created_Fields.filter((i) => {
      return i != item;
    });
  }
  saveOne(i: Field) {
    if (i._id != undefined) return;
    this.loading = true;
    this.fieldService.createField(i).subscribe((field) => {
      this.created_Fields.map((i) => {
        if (i.name == field.name) {
          i._id = field._id;
        }
        return i;
      });
      this.fields.splice(0, 0, field);
      this.loading = false;
    });
  }
  saveAll() {
    const payload = this.created_Fields.filter((i) => {
      return i._id == undefined;
    });
    if (!payload.length) return;
    this.loading = true;
    this.fieldService.createFields(payload).subscribe((fields) => {
      fields.forEach((element) => {
        this.created_Fields.map((i) => {
          if (i.name == element.name) {
            i._id = element._id;
          }
          return i;
        });
      });
      this.fields.splice(0, 0, ...fields);
      this.loading = false;
    });
  }
}
