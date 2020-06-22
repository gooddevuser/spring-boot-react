package com.springexample.reactdemo.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Note {

	@Id @GeneratedValue private Long id;
	@Column private String title;
	@Column private String content;
	@Column private String tags;
	@Column private Date updatedDate = new Date(); // default value	
	
}
