import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../../services/note.service'
import { Note } from 'src/app/models/Note';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note: Note;
  @Output() deleteNote: EventEmitter<Note> = new EventEmitter();
  constructor(private noteService:NoteService) { }

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
    // toggle on server
    this.noteService.toggleCompleted(note).subscribe(note => {
      console.log(note);
    })
  }

  onDelete(note) {
    console.log('delete');
    this.deleteNote.emit(note)
    
  }

}
