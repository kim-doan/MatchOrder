package com.ordermatch.main.user.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.ibatis.type.Alias;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter @Setter
@Alias("TB_USER")
@RequiredArgsConstructor
@JsonIgnoreProperties({"enabled", "credentialsNonExpired", "accountNonLocked", "accountNonExpired"})
public class User implements UserDetails{
	
	private int user_id;
	
	private String username;
	
	private String password;
	
	private String manager_name;
	
	private String manager_tel;
	
	private String manager_email;
	
	private String cal_manager_name;
	
	private String cal_manager_tel;
	
	private String cal_manager_email;
	
	private Date createAt;
	
	private Date modifyAt;
	
	private Date disable_time;
	
	private List<String> roles = new ArrayList<>();
	
	private List<Company> company = new ArrayList<Company>();
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return this.roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
}
