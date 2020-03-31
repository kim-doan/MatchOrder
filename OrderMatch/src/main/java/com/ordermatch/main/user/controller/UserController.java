package com.ordermatch.main.user.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ordermatch.main.exception.CAuthenticationEntryPointException;
import com.ordermatch.main.exception.CUserDuplicateException;
import com.ordermatch.main.exception.CUserNotFoundException;
import com.ordermatch.main.jwt.JwtTokenProvider;
import com.ordermatch.main.response.model.CommonResult;
import com.ordermatch.main.response.model.ListResult;
import com.ordermatch.main.response.model.LoginResult;
import com.ordermatch.main.response.model.SingleResult;
import com.ordermatch.main.response.service.ResponseService;
import com.ordermatch.main.user.model.AuthenticationRequest;
import com.ordermatch.main.user.model.User;
import com.ordermatch.main.user.param.UserParam;
import com.ordermatch.main.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ResponseService responseService;
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	//로그인 토큰 확인
	@CrossOrigin
	@GetMapping("/user/validToken")
	public SingleResult<User> getLoginSession(@RequestHeader(value="X-AUTH-TOKEN") String token, @RequestHeader(value="username") String username) {
		if(token != null && jwtTokenProvider.validateToken(token)) { // 토큰 만료 확인
			User user = userService.findByTokenUsername(username).orElseThrow(CUserNotFoundException::new);
			
			return responseService.getSingleResult(user);
		} else {
			throw new CAuthenticationEntryPointException();
		}

	}
	
	//회원 전체 조회
	@CrossOrigin
	@GetMapping("/users")
	public ListResult<User> getUserAll() {
		return responseService.getListResult(userService.getAllUser()); 
	}
	
	//회원 단건 조회
	@CrossOrigin
	@GetMapping("/user/{id}")
	public SingleResult<User> findById(@PathVariable(value = "id") int id) {
		return responseService.getSingleResult(userService.findById(id).orElseThrow(CUserNotFoundException::new));
	}
	
	//회원 단건 조회 (아이디)
	@CrossOrigin
	@GetMapping("/user/username/{username}")
	public SingleResult<User> findByUsername(@PathVariable(value = "username") String username) {
		return responseService.getSingleResult(userService.findByUsername(username).orElseThrow(CUserNotFoundException::new));
	}
	
	//회원 가입
	@CrossOrigin
	@PostMapping("/user/register")
	public CommonResult insertUser(@Valid @RequestBody UserParam userParam) throws Exception {
		boolean success = userService.insertUser(userParam);
		
		if(success == true) { // 성공
			return responseService.getSuccessResult();
		} else if(success == false) {
			throw new CUserDuplicateException();
		} else {
			throw new Exception();
		}
	}
	
	// 로그인
	@CrossOrigin
	@PostMapping("/user/login")
	public LoginResult login(@Valid @RequestBody AuthenticationRequest user) throws Exception {
		String token = userService.login(user);
		
		
		if(token != null) {
			return responseService.getLoginResult(token);
		} else {
			throw new CUserNotFoundException();
		}
	}
	
	//회원 수정
	@CrossOrigin
	@PutMapping("/user")
	public CommonResult updateUser(@Valid @RequestBody UserParam userParam) {
		boolean state = userService.updateUser(userParam);
		
		if(state == false) {
			throw new CUserDuplicateException();
		}
		
		return responseService.getSuccessResult();
	}
	
	//회원 탈퇴
	/* delete문이 아닌 update문으로 바꿀필요있음.*/
	@CrossOrigin
	@DeleteMapping("/user/{id}")
	public CommonResult deleteUser(@PathVariable(value = "id") int id) throws Exception {
		int state = userService.deleteUser(id);
		
		if(state == 1) {
			return responseService.getSuccessResult();
		} else if(state == 0) {
			throw new CUserNotFoundException();
		} else {
			throw new Exception();
		}
	}
}
