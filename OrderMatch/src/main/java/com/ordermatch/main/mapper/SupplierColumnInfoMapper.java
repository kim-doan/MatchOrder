package com.ordermatch.main.mapper;

import java.util.List;

import com.ordermatch.main.master.model.SupplierColumnInfo;

public interface SupplierColumnInfoMapper {
	
	List<SupplierColumnInfo> findAllSupplierColumnInfo();
	
	boolean insertSupplierColumnInfo(SupplierColumnInfo supplierColumnInfo);
	
	boolean updateSupplierColumnInfo(SupplierColumnInfo supplierColumnInfo);
}
