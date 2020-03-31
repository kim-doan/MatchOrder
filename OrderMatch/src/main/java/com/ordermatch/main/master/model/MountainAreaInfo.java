package com.ordermatch.main.master.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter @Setter
@RequiredArgsConstructor
public class MountainAreaInfo {
	private String zonecode;
	
	private String old_zip_code;
	
	private String jibun_address;
	
	private String road_address;
	
	private String sido;
	
	private String sigungu_code;
	
	private String sigungu;
	
	private String load_name;
	
	private String bname;
	
	private String bname1;
	
	private String address_detail;
	
	private String old_address_detail;
	
	private int regional_delivery_cost;

	public MountainAreaInfo(String zonecode, String old_zip_code, String jibun_address, String road_address,
			String sido, String sigungu_code, String sigungu, String load_name, String bname, String bname1,
			String address_detail, String old_address_detail, int regional_delivery_cost) {
		super();
		this.zonecode = zonecode;
		this.old_zip_code = old_zip_code;
		this.jibun_address = jibun_address;
		this.road_address = road_address;
		this.sido = sido;
		this.sigungu_code = sigungu_code;
		this.sigungu = sigungu;
		this.load_name = load_name;
		this.bname = bname;
		this.bname1 = bname1;
		this.address_detail = address_detail;
		this.old_address_detail = old_address_detail;
		this.regional_delivery_cost = regional_delivery_cost;
	}
}
