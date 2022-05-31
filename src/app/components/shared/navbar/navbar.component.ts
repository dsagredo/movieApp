import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  inputSearch = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  onSearch() {
    this.submitted.emit(this.inputSearch.value);
    this.inputSearch.setValue('');
  }
}
