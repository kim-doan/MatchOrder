package com.ordermatch.main.delivery.model;

import java.util.Date;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter @Setter
@RequiredArgsConstructor
@Builder
public class DeliveryCostInfo {
	private int form_id;
	
	private int user_id;
	
	private String form_name;
	
	private String seller_def_yn;
	
	private String supplier_def_yn;
	
	private String delivery_cost_type;
	
	private String bundle_delivery_yn;
	
	private Integer add_cost_jeju;
	
	private Integer add_cost_mount;
	
	private Integer cost_free_price;
	
	private Integer cost_free_num_repeat;
	
	private Integer cost_free_num;
	
	private Date create_at;
	
	private Date modify_at;
	
	private Integer used;

	public DeliveryCostInfo(int form_id, int user_id, String form_name, String seller_def_yn, String supplier_def_yn,
			String delivery_cost_type, String bundle_delivery_yn, Integer add_cost_jeju, Integer add_cost_mount,
			Integer cost_free_price, Integer cost_free_num_repeat, Integer cost_free_num, Date create_at,
			Date modify_at, Integer used) {
		super();
		this.form_id = form_id;
		this.user_id = user_id;
		this.form_name = form_name;
		this.seller_def_yn = seller_def_yn;
		this.supplier_def_yn = supplier_def_yn;
		this.delivery_cost_type = delivery_cost_type;
		this.bundle_delivery_yn = bundle_delivery_yn;
		this.add_cost_jeju = add_cost_jeju;
		this.add_cost_mount = add_cost_mount;
		this.cost_free_price = cost_free_price;
		this.cost_free_num_repeat = cost_free_num_repeat;
		this.cost_free_num = cost_free_num;
		this.create_at = create_at;
		this.modify_at = modify_at;
		this.used = used;
	}

	
}
