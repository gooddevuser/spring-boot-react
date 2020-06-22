package com.springexample.reactdemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springexample.reactdemo.entity.Note;
import com.springexample.reactdemo.repository.NoteRepository;

@Service
public class NoteServiceImpl implements NoteService {

	@Autowired
	private NoteRepository noteRepository;
	
	@Override
	public void addNote(Note note) {
		
		noteRepository.save(note);
		
	}

	@Override
	public List<Note> loadNoteList() {
		List<Note> notes = (List<Note>)noteRepository.findAll();
		return notes;
	}

	@Override
	public void deleteNote(int noteId) {

		noteRepository.deleteById((long)noteId); // Long <- long <- int
		
	}

	@Override
	public void updateNote(Note note) {
		
		noteRepository.save(note);
		
	}

}
