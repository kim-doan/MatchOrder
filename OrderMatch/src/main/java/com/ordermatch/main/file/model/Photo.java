package com.ordermatch.main.file.model;

import java.io.InputStream;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Photo {
	private String title;
	private InputStream stream;
}
