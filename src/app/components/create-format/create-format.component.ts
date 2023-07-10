import { Component, OnInit } from '@angular/core';
import { Format } from 'src/format';
import {
  faEdit,
  faSave,
  faFolderOpen,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FormatService } from 'src/app/services/format.service';
@Component({
  selector: 'app-create-format',
  templateUrl: './create-format.component.html',
  styleUrls: ['./create-format.component.css'],
})
export class CreateFormatComponent implements OnInit {
  loading = false;
  deleteIcon = faTimes;
  editIcon = faEdit;
  saveIcon = faSave;
  openIcon = faFolderOpen;

  formats: Format[] = [];
  created_formats: Format[] = [];

  format: string = '';
  constructor(private formatService: FormatService) {}
  ngOnInit(): void {
    this.getFormats();
  }
  getFormats() {
    this.loading = true;
    this.formatService.getFormats().subscribe((formats) => {
      this.formats = formats;
      this.loading = false;
    });
  }
  add() {
    const found = this.formats.find((i) => {
      return i.format == this.format.toLowerCase();
    });
    if (found) return;
    this.created_formats.splice(0, 0, {
      format: this.format,
    });
    this.clear();
  }
  clear() {
    this.format = '';
  }
  deleteAll() {
    this.created_formats = [];
  }
  deleteOne(item: Format) {
    this.created_formats = this.created_formats.filter((i) => {
      return i != item;
    });
  }
  saveOne(i: Format) {
    if (i._id != undefined) return;
    this.loading = true;
    this.formatService.createFormat(i).subscribe((format) => {
      this.created_formats.map((i) => {
        if (i.format == format.format) {
          i._id = format._id;
        }
        return i;
      });
      this.formats.splice(0, 0, format);
      this.loading = false;
    });
  }
  saveAll() {
    const payload = this.created_formats.filter((i) => {
      return i._id == undefined;
    });
    if (!payload.length) return;
    this.loading = true;
    this.formatService.createFormats(payload).subscribe((formats) => {
      formats.forEach((element) => {
        this.created_formats.map((i) => {
          if (i.format == element.format) {
            i._id = element._id;
          }
          return i;
        });
      });
      this.formats.splice(0, 0, ...formats);
      this.loading = false;
    });
  }
}
