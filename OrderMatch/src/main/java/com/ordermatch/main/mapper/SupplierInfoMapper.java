package com.ordermatch.main.mapper;

import java.util.List;

import com.ordermatch.main.master.model.SupplierInfo;

public interface SupplierInfoMapper {
	List<SupplierInfo> findAllSupplierInfo(SupplierInfo supplierInfo, Integer limit);
}
