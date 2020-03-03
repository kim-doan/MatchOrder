package com.ordermatch.main.file.service;

import java.io.IOException;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.gridfs.model.GridFSFile;
import com.ordermatch.main.file.model.Photo;


@Service
public class PhotoService {

	@Autowired
	private GridFsTemplate gridFsTemplate;
	
	@Autowired
	private GridFsOperations operations;
	
	public String addPhoto(String title, MultipartFile file) throws IOException {
		DBObject metaData = new BasicDBObject();
		metaData.put("type", "photo");
		metaData.put("title", title);
		ObjectId id = gridFsTemplate.store(file.getInputStream(), file.getName(), file.getContentType(), metaData);
		return id.toString();
	}
	
	public Photo getPhoto(String id) throws IllegalStateException, IOException {
		GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(id)));
		Photo photo = new Photo();
		photo.setTitle(file.getMetadata().getString("title").toString());
		photo.setStream(operations.getResource(file).getInputStream());
		return photo;
	}
}
