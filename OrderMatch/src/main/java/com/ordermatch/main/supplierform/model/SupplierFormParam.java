package com.ordermatch.main.supplierform.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonFormatTypes;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SupplierFormParam {

	private int user_id;
	
	private int form_id;
	
	private String form_name;
	
	private Date create_at;
	
	private Date modify_at;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
	private Date disable_time;
	
	private String column_name;
}
