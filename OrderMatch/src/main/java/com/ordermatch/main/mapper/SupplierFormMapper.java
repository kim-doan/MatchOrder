package com.ordermatch.main.mapper;

import java.util.List;

import com.ordermatch.main.supplierform.model.SupplierForm;
import com.ordermatch.main.supplierform.model.SupplierFormParam;

public interface SupplierFormMapper {
	
	List<SupplierForm> findAllSupplierForm(SupplierFormParam supplierFormParam);
}
