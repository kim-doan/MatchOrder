package com.ordermatch.main.master.model;

import java.io.Serializable;
import java.util.Date;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter @Setter
@RequiredArgsConstructor
public class SupplierColumnInfo{
	private String supplier_column_name;
	
	private Date create_at;
	
	private Date disable_time;

	public SupplierColumnInfo(String supplier_column_name, Date create_at, Date disable_time) {
		super();
		this.supplier_column_name = supplier_column_name;
		this.create_at = create_at;
		this.disable_time = disable_time;
	}
}
