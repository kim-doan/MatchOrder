package com.ordermatch.main.supplierform.model;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SupplierFormParam {

	private int user_id;
	
	private int form_id;
	
	private String form_name;
	
	private Date create_at;
	
	private Date modify_at;
	
	private Date disable_time;
	
	private String column_name;
}
