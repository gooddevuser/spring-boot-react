package com.springexample.reactdemo.service;

import java.util.List;

import com.springexample.reactdemo.entity.Note;

public interface NoteService {
	
	void addNote(Note note);

	List<Note> loadNoteList();

	void deleteNote(int noteId);

	void updateNote(Note note);

}
