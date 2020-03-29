package com.ordermatch.main.user.param;

import java.io.Serializable;
import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UserParam implements Serializable {
	private int user_id;
	
	private String username;
	
	private String password;
	
	private String manager_name;
	
	private String manager_tel;
	
	private String manager_email;
	
	private String cal_manager_name;
	
	private String cal_manager_tel;
	
	private String cal_manager_email;
	
	private int zonecode;
	
	private String jibunAddress;
	
	private String roadAddress;
	
	private String detailAddress;
	
	private Date createAt;
	
	private Date modifyAt;
	
	private Date disable_time;
	
	private String company_ein;
	
	private int company_type;
	
	private String company_name;
	
	private String company_category;
	
	private String company_tel;
	
	private String company_fax;
	
	private String company_address;
	
	private String company_img;
	
	private String ceo_name;
}
