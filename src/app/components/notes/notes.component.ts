import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/Note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes:Note[];

  constructor(private noteService:NoteService) {

   }

  ngOnInit() {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    })
  }

  deleteNote(note:Note) {
    this.notes = this.notes.filter(n => n.id !== note.id);
    this.noteService.deleteNote(note).subscribe();
  }

  addNote(note:Note) {
    this.noteService.addNote(note).subscribe(note => {
      this.notes.push(note);
    })
  }

}
