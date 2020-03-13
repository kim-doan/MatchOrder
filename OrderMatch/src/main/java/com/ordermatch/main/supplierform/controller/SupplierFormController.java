package com.ordermatch.main.supplierform.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ordermatch.main.response.model.CommonResult;
import com.ordermatch.main.response.model.ListResult;
import com.ordermatch.main.response.service.ResponseService;
import com.ordermatch.main.supplierform.model.SupplierForm;
import com.ordermatch.main.supplierform.model.SupplierFormParam;
import com.ordermatch.main.supplierform.service.SupplierFormService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SupplierFormController {
	@Autowired
	private ResponseService responseService;
	
	@Autowired
	private SupplierFormService supplierFormService;
	
	@CrossOrigin
	@PostMapping("/supplierForm")
	public ListResult<SupplierForm> findAllSupplierForm(@RequestHeader(value="user_id") int user_id, 
			@Valid @RequestBody SupplierFormParam supplierFormParam) {
		supplierFormParam.setUser_id(user_id);
		
		return responseService.getListResult(supplierFormService.findAllSupplierForm(supplierFormParam));
	}
	
	@CrossOrigin
	@PostMapping("/supplierForm/insert")
	public CommonResult insertSupplierForm(@RequestHeader(value="user_id") int user_id,
			@Valid @RequestBody SupplierFormParam supplierFormParam) {
		supplierFormParam.setUser_id(user_id);
		
		int result = supplierFormService.insertSupplierForm(supplierFormParam);
		
		if(result > 0) {
			return responseService.getSuccessResult(result);
		} else {
			return responseService.getFailResult(-2000, "발주서 엑셀 양식 저장에 실패하였습니다.");
		}
	}
	
	@CrossOrigin
	@PostMapping("/supplierForm/update")
	public CommonResult updateSupplierForm(@RequestHeader(value = "user_id") int user_id,
			@Valid @RequestBody SupplierFormParam supplierFormParam) {
		
		int result = supplierFormService.updateSupplierFormColumn(supplierFormParam);
		
		if(result > 0) {
			return responseService.getSuccessResult(result);
		} else {
			return responseService.getFailResult(-2100, "발주서 엑셀 양식 수정에 실패하였습니다.");
		}
	}
	
	@CrossOrigin
	@PostMapping("/supplierForm/column/insert")
	public CommonResult insertSupplierFormColumn(@Valid @RequestBody SupplierFormParam[] supplierFormParam) {
		boolean result = supplierFormService.insertSupplierFormColumn(supplierFormParam);
		
		if(result == true) {
			return responseService.getSuccessResult();
		} else {
			return responseService.getFailResult(-2001, "항목 설정 저장에 실패하였습니다.");
		}
	}
}
