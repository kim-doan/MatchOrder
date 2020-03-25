package com.ordermatch.main.supplierform.model;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter @Setter
@RequiredArgsConstructor
@Builder
public class SupplierFormColumn {

	private int form_id;
	
	private String column_name;
	
	public SupplierFormColumn(int form_id, String column_name) {
		super();
		this.form_id = form_id;
		this.column_name = column_name;
	}
}
