package com.ordermatch.main.master.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ordermatch.main.mapper.SupplierColumnInfoMapper;
import com.ordermatch.main.master.model.SupplierColumnInfo;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class SupplierColumnInfoService {
	
	@Autowired
	private SupplierColumnInfoMapper supplierColumnInfoMapper;
	
	public List<SupplierColumnInfo> findAllSupplierColumnInfo() {
		return supplierColumnInfoMapper.findAllSupplierColumnInfo();
	}
	
	public boolean insertSupplierColumnInfo(SupplierColumnInfo supplierColumnInfo) {
		return supplierColumnInfoMapper.insertSupplierColumnInfo(supplierColumnInfo);
	}
	
	public boolean updateSupplierColumnInfo(SupplierColumnInfo supplierColumnInfo) {
		return supplierColumnInfoMapper.updateSupplierColumnInfo(supplierColumnInfo);
	}

}
