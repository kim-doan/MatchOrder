package com.ordermatch.main.customform.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.ibatis.type.Alias;

import com.ordermatch.main.user.model.Company;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter @Setter
@Alias("TB_USER")
@RequiredArgsConstructor
public class CustomForm {
	private int user_id;
	
	private String form_code;
	
	private String form_name;
	
	private int form_type;
	
	private int header_position;
	
	private Date createAt;
	
	private Date modifyAt;
	
	private Date disable_time;
	
	private List<CustomFormColumn> customFormColumn = new ArrayList<CustomFormColumn>();
}
