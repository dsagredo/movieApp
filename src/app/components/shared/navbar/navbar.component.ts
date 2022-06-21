import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  @Input() isActionComplete!: boolean;
  inputSearch = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.isActionComplete;
  }

  onSearch() {
    this.submitted.emit(this.inputSearch.value);
    this.inputSearch.setValue('');
  }
}
