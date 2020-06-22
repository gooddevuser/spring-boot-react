package com.springexample.reactdemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.springexample.reactdemo.entity.Note;
import com.springexample.reactdemo.service.NoteService;

@Controller
@RequestMapping(path = { "/note" })
public class NoteController {
	
	@Autowired
	private NoteService noteService;
	
	@PostMapping(path = { "/add" }, produces = "text/plain;charset=utf-8")
	@ResponseBody
	public String add(@RequestBody Note note) {
	
		noteService.addNote(note);
		
		return "success";
		//return String.format("%d", note.getId());
	}
	
	@GetMapping(path = { "/list" }, 
				produces = "application/json;charset=utf-8")
	@ResponseBody
	public List<Note> list() {
		
		List<Note> notes = noteService.loadNoteList();
		return notes;
	}
	
	@DeleteMapping(path = { "/delete/{noteId}" })
	@ResponseBody
	public String delete(@PathVariable int noteId) {
		
		noteService.deleteNote(noteId);
		
		return "success";
		
	}
	
	@PutMapping(path = { "/update" })
	@ResponseBody
	public String update(@RequestBody Note note) {
		
		noteService.updateNote(note);
		
		return "success";
		
	}

}

















