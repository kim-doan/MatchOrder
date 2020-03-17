package com.ordermatch.main.supplierform.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.regex.Pattern;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter @Setter
@RequiredArgsConstructor
@Builder
public class SupplierForm {

	private int user_id;
	
	private int form_id;
	
	private String form_name;
	
	@JsonFormat(pattern="yyyy-MM-dd", timezone = "Aisa/Seoul")
	private Date create_at;
	
	private Date modify_at;
	
	private Date disable_time;

	List<SupplierFormColumn> supplierFormColumn = new ArrayList<SupplierFormColumn>();

	public SupplierForm(int user_id, int form_id, String form_name, Date create_at, Date modify_at, Date disable_time,
			List<SupplierFormColumn> supplierFormColumn) {
		super();
		this.user_id = user_id;
		this.form_id = form_id;
		this.form_name = form_name;
		this.create_at = create_at;
		this.modify_at = modify_at;
		this.disable_time = disable_time;
		this.supplierFormColumn = supplierFormColumn;
	}
}
