package com.ordermatch.main.user.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter @Setter
@Alias("TB_COMPANY")
@RequiredArgsConstructor
public class Company implements Serializable {
	private int user_id;
	
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
