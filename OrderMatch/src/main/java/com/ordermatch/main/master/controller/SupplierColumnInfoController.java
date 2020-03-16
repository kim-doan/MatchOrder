package com.ordermatch.main.master.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ordermatch.main.master.model.SupplierColumnInfo;
import com.ordermatch.main.master.service.SupplierColumnInfoService;
import com.ordermatch.main.response.model.CommonResult;
import com.ordermatch.main.response.model.ListResult;
import com.ordermatch.main.response.service.ResponseService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
public class SupplierColumnInfoController {
	@Autowired
	private ResponseService responseService;
	
	@Autowired
	private SupplierColumnInfoService supplierColumnInfoService;
	
	
	@CrossOrigin
	@GetMapping("/master/supplierColumnInfo")
	public ListResult<SupplierColumnInfo> findAllSupplierForm() {
		return responseService.getListResult(supplierColumnInfoService.findAllSupplierColumnInfo());
	}
	
	@CrossOrigin
	@PostMapping("/master/supplierColumnInfo/insert")
	public CommonResult insertSupplierForm(@RequestBody @Valid SupplierColumnInfo supplierColumnInfo) {
		boolean result = supplierColumnInfoService.insertSupplierColumnInfo(supplierColumnInfo);
		
		if(result == true) {
			return responseService.getSuccessResult();
		} else {
			return responseService.getFailResult(-2500, "(기준정보) 공급사 컬럼 정보 추가 실패");
		}
	}
	
	@CrossOrigin
	@PostMapping("/master/supplierColumnInfo/update")
	public CommonResult updateSupplierFormColumn(@RequestBody @Valid SupplierColumnInfo supplierColumnInfo) {
		boolean result = supplierColumnInfoService.updateSupplierColumnInfo(supplierColumnInfo);
		
		if(result == true) {
			return responseService.getSuccessResult();
		} else {
			return responseService.getFailResult(-2501, "(기준정보) 공급사 컬럼 정보 수정 실패");
		}
	}
}
