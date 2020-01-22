package com.ordermatch.main.user.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ordermatch.main.exception.CUserNotFoundException;
import com.ordermatch.main.mapper.UserMapper;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class CustomUserDetailService implements UserDetailsService {

	private final UserMapper userMapper;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return userMapper.findById(Integer.valueOf(username)).orElseThrow(CUserNotFoundException::new);
	}
}
