import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../models/Note';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notesUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  notesLimit: string = '?_limit=5'

  constructor(private http:HttpClient) { }
  // get Notes
  getNotes():Observable<Note[]> {
    return this.http.get<Note[]>(`${this.notesUrl}${this.notesLimit}`);
  }

  deleteNote(note:Note):Observable<Note> {
    const url = `${this.notesUrl}/${note.id}`
    return this.http.delete<Note>(url, httpOptions);
  }
  
  toggleCompleted(note: Note):Observable<any> {
    const url = `${this.notesUrl}/${note.id}`
    return this.http.put(url, note, httpOptions)
  }
  

}


// return [
    //   {
    //     id:1,
    //     title: 'Build an Angular project',
    //     completed: true,
    //   },
    //   {
    //     id:2,
    //     title: 'Practice Typescript',
    //     completed: false,
    //   },
    //   {
    //     id:3,
    //     title: 'Learn Alpine Js',
    //     completed: false,
    //   },
    //   {
    //     id:4,
    //     title: 'Play with Python',
    //     completed: false,
    //   },
    //   {
    //     id:5,
    //     title: 'Play with Context/Hooks',
    //     completed: true,
    //   },
    // ]