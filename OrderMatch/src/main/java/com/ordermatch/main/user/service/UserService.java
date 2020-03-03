package com.ordermatch.main.user.service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ordermatch.main.config.CacheKey;
import com.ordermatch.main.exception.CUserNotFoundException;
import com.ordermatch.main.jwt.JwtTokenProvider;
import com.ordermatch.main.mapper.UserMapper;
import com.ordermatch.main.user.model.AuthenticationRequest;
import com.ordermatch.main.user.model.User;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
	
	@Autowired
	private UserMapper userMapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired 
	private JwtTokenProvider jwtTokenProvider;
	
	public List<User> getAllUser() {
		return userMapper.selectAllUser();
	}
	
	public Optional<User> findById(int id) {
		return userMapper.findById(id);
	}
	
	@Cacheable(value = CacheKey.USER, key ="#username", unless = "#result == null")
	public Optional<User> findByTokenUsername(String username) {
		return userMapper.findByUsername(username);
	}
	
	public Optional<User> findByUsername(String username) {
		return userMapper.findByUsername(username);
	}
	
	public String login(AuthenticationRequest user) {
		User dbUser = userMapper.findByUsername(user.getUsername()).orElseThrow(CUserNotFoundException::new);
		
		if(passwordEncoder.matches(user.getPassword(), dbUser.getPassword())) {
			String token = jwtTokenProvider.createToken(String.valueOf(dbUser.getUser_id()), dbUser.getRoles());
			return token;
		} else {
			return null;
		}
	}
	
	public boolean insertUser(User user) {
		Optional<User> dbUser = userMapper.findByUsername(user.getUsername());
		
		//아이디 중복체크
		if(dbUser.isPresent() == false) { // 유저 아이디 검색 후 관련 아이디가 없을 경우 // null이면 false null이아니면 true임
			//비밀번호 암호화
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			//회원가입
			userMapper.insertUser(user);
			
			String keyId = Integer.toString(user.getUser_id());
			
			//권한설정
			HashMap<String, String> map = new HashMap<String, String>();
			map.put("user_id", keyId);
			map.put("roles", "ROLE_USER"); // 유저권한
			userMapper.insertRole(map);
			return true;
		} else { // 이미 존재하는 아이디
			return false;
		}
	}
	
	public int updateUser(User user) {
		//아이디 변경시 중복체크
		if(this.findByUsername(user.getUsername()) != null) {// 유저 아이디 검색 후 관련 아이디가 없을 경우
			System.out.println("dd");
			user.setPassword(passwordEncoder.encode(user.getPassword())); // 비밀번호 인코딩 설정
			
			userMapper.updateUser(user);
			int keyId = user.getUser_id();
			
			return keyId;
		} else { 
			return 0;
		}
	}
	
	public int deleteUser(int id) {
		return userMapper.deleteUser(id);
	}
}
