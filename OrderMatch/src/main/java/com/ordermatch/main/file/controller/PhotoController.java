package com.ordermatch.main.file.controller;

import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.google.common.io.ByteStreams;
import com.ordermatch.main.file.model.Photo;
import com.ordermatch.main.file.service.PhotoService;
import com.ordermatch.main.mapper.UserMapper;
import com.ordermatch.main.response.model.CommonResult;
import com.ordermatch.main.response.service.ResponseService;
import com.ordermatch.main.user.model.UserParam;
import com.ordermatch.main.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PhotoController {
	
	@Autowired
	private PhotoService photoService;
	
	@Autowired
	private ResponseService responseService;
	
	@Autowired
	private UserService userService;
	
	@CrossOrigin
	@PostMapping("/photo/add")
	public CommonResult addPhoto(@RequestParam("title") String title,
			@RequestParam("file") MultipartFile file) throws IOException {
		String id = photoService.addPhoto(title, file);
		return responseService.getSuccessResult();
	}
	
	@CrossOrigin
	@PostMapping("/photo/logo/add")
	public CommonResult addLogo(@RequestParam("file") MultipartFile file, @RequestParam("username") String username) throws IOException {
		UserParam userParam = new UserParam();

		String id = photoService.addPhoto(username, file);
		
		userParam.setUsername(username);
		userParam.setCompany_img(id);
		userService.updateUser(userParam);
		return responseService.getSuccessResult();
	}
	
	@CrossOrigin
	@GetMapping(value = "/photo/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
	public @ResponseBody byte[] getPhoto(@PathVariable String id) throws Exception {
		Photo photo = photoService.getPhoto(id);
		InputStream in = photo.getStream();
		return ByteStreams.toByteArray(in);
	}
}
