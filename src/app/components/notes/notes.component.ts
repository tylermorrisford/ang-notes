import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes:Note[];
  constructor() { }

  ngOnInit() {
    this.notes = [
      {
        id:1,
        title: 'Build an Angular project',
        completed: true,
      },
      {
        id:2,
        title: 'Practice Typescript',
        completed: false,
      },
      {
        id:3,
        title: 'Learn Alpine Js',
        completed: false,
      },
      {
        id:4,
        title: 'Play with Python',
        completed: false,
      },
    ]
  }

}
