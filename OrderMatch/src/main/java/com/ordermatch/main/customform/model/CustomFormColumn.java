package com.ordermatch.main.customform.model;

import java.util.Date;

import org.apache.ibatis.type.Alias;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter @Setter
@Alias("TB_USER")
@RequiredArgsConstructor
@Builder
public class CustomFormColumn {
	private String form_code;
	
	private String header_name;
	
	private String convert_name;
	
	private String overlab_yn;
	
	private String delivery_yn;
	
	private String delivery_invoice_yn;

	public CustomFormColumn(String form_code, String header_name, String convert_name, String overlab_yn,
			String delivery_yn, String delivery_invoice_yn) {
		super();
		this.form_code = form_code;
		this.header_name = header_name;
		this.convert_name = convert_name;
		this.overlab_yn = overlab_yn;
		this.delivery_yn = delivery_yn;
		this.delivery_invoice_yn = delivery_invoice_yn;
	}
}
