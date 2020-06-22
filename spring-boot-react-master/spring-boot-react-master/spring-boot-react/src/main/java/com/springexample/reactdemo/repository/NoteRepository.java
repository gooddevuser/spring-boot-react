package com.springexample.reactdemo.repository;

import org.springframework.data.repository.CrudRepository;

import com.springexample.reactdemo.entity.Note;

public interface NoteRepository extends CrudRepository<Note, Long> {

}
