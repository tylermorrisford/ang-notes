import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/Note';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note: Note;
  constructor() { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      note: true,
      'is-complete': this.note.completed
    }
    return classes;
  }

  onToggle(note) {
    console.log('toggle');
    note.completed = !note.completed
  }

  onDelete(note) {
    console.log('delete');
    
  }

}
