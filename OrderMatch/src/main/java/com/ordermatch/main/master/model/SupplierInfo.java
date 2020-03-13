package com.ordermatch.main.master.model;

import java.util.Date;
import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

/**
 * 
 * 공급사 정보
 * @author 김도안
 *
 */

@Getter @Setter
@RequiredArgsConstructor
@Builder
public class SupplierInfo {

	private int supplier_id;
	
	private int bizer_cret_num;
	
	private String manager_nm;
	
	private String manager_tel;
	
	private String email;
	
	private String cs_email;
	
	private String settle_email;
	
	private String supplier_name;
	
	private int user_id;
	
	private int order_grp_id;
	
	private int caculate_grp_id;
	
	private String memo;
	
	private int delevery_cost_form_id;
	
	private String excel_down_form;
	
	private int form_id;
	
	private String excel_cret_system;
	
	private Date disable_time;

	public SupplierInfo(int supplier_id, int bizer_cret_num, String manager_nm, String manager_tel, String email,
			String cs_email, String settle_email, String supplier_name, int user_id, int order_grp_id,
			int caculate_grp_id, String memo, int delevery_cost_form_id, String excel_down_form, int form_id,
			String excel_cret_system, Date disable_time) {
		super();
		this.supplier_id = supplier_id;
		this.bizer_cret_num = bizer_cret_num;
		this.manager_nm = manager_nm;
		this.manager_tel = manager_tel;
		this.email = email;
		this.cs_email = cs_email;
		this.settle_email = settle_email;
		this.supplier_name = supplier_name;
		this.user_id = user_id;
		this.order_grp_id = order_grp_id;
		this.caculate_grp_id = caculate_grp_id;
		this.memo = memo;
		this.delevery_cost_form_id = delevery_cost_form_id;
		this.excel_down_form = excel_down_form;
		this.form_id = form_id;
		this.excel_cret_system = excel_cret_system;
		this.disable_time = disable_time;
	}
}
