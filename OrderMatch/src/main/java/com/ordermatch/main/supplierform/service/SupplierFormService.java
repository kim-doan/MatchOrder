package com.ordermatch.main.supplierform.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ordermatch.main.mapper.SupplierFormMapper;
import com.ordermatch.main.supplierform.model.SupplierForm;
import com.ordermatch.main.supplierform.model.SupplierFormParam;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class SupplierFormService {

	@Autowired
	private SupplierFormMapper supplierFormMapper;
	
	public List<SupplierForm> findAllSupplierForm(SupplierFormParam supplierFormParam) {
		
		List<SupplierForm> supplierForm = supplierFormMapper.findAllSupplierForm(supplierFormParam);
		
		return supplierForm;
	}
	
	public int insertSupplierForm(SupplierFormParam supplierFormParam) {
		supplierFormMapper.insertSupplierForm(supplierFormParam);
		
		int form_id = supplierFormParam.getForm_id();
		
		return form_id;
	}
	
	public int updateSupplierFormColumn(SupplierFormParam supplierFormParam) {
		supplierFormMapper.updateSupplierForm(supplierFormParam);
		
		int form_id = supplierFormParam.getForm_id();
		
		return form_id;
	}
	
	public boolean insertSupplierFormColumn(SupplierFormParam[] supplierFormParam) {
		boolean result = true;
		
		supplierFormMapper.deleteSupplierFormColumn(supplierFormParam[0].getForm_id());
		
		for(int i=0;i<supplierFormParam.length;i++) {			
			result = supplierFormMapper.insertSupplierFormColumn(supplierFormParam[i]);
		}
		
		return result;
	}
}
