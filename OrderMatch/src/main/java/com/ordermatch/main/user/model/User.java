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
@Alias("USER")
@RequiredArgsConstructor
@JsonIgnoreProperties({"enabled", "credentialsNonExpired", "accountNonLocked", "accountNonExpired"})
public class User implements UserDetails{
	
	private int id; //DB cell id
	
	private String username;
	
	private String password;
	
	private String company_type;
	
	private String company_name;
	
	private String repressntative;
	
	private String officeNo;
	
	private String business;
	
	private String businessType;
	
	private String tel;
	
	private String fax;
	
	private String addr_num;
	
	private String addr;
	
	private String detail_addr;
	
	private String charge_name;
	
	private String charge_tel;
	
	private String charge_email;
	
	private Date createAt; // 생성일자
	
	private Date modifyAt; // 수정일자
	
	private int approval;
	
	private String approval_dt; // DATE 로 변환
	
	private List<String> roles = new ArrayList<>();
	
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

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", roles=" + roles + "]";
	}
}
