package com.ordermatch.main.supplierform.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ordermatch.main.exception.CSupplierFormColumnInsertException;
import com.ordermatch.main.exception.CSupplierFormDeleteException;
import com.ordermatch.main.exception.CSupplierFormInsertException;
import com.ordermatch.main.exception.CSupplierFormUpdateException;
import com.ordermatch.main.exception.CUserNotFoundException;
import com.ordermatch.main.response.model.CommonResult;
import com.ordermatch.main.response.model.ListResult;
import com.ordermatch.main.response.service.ResponseService;
import com.ordermatch.main.supplierform.model.SupplierForm;
import com.ordermatch.main.supplierform.model.SupplierFormParam;
import com.ordermatch.main.supplierform.service.SupplierFormService;
import com.ordermatch.main.user.model.User;
import com.ordermatch.main.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SupplierFormController {
	@Autowired
	private ResponseService responseService;
	
	@Autowired
	private SupplierFormService supplierFormService;
	
	@Autowired
	private UserService userService;
	
	@CrossOrigin
	@PostMapping("/supplierForm")
	public ListResult<SupplierForm> findAllSupplierForm(@RequestHeader(value="username") String username, 
			@Valid @RequestBody SupplierFormParam supplierFormParam) {
		User user = userService.findByTokenUsername(username).orElseThrow(CUserNotFoundException::new);
		supplierFormParam.setUser_id(user.getUser_id());
		
		return responseService.getListResult(supplierFormService.findAllSupplierForm(supplierFormParam));
	}
	
	@CrossOrigin
	@PostMapping("/supplierForm/insert")
	public CommonResult insertSupplierForm(@RequestHeader(value="username") String username,
			@Valid @RequestBody SupplierFormParam supplierFormParam) {
		User user = userService.findByTokenUsername(username).orElseThrow(CUserNotFoundException::new);
		
		supplierFormParam.setUser_id(user.getUser_id());
		
		int result = supplierFormService.insertSupplierForm(supplierFormParam);
		
		if(result > 0) {
			return responseService.getSuccessResult(result);
		} else {
			throw new CSupplierFormInsertException();
		}
	}
	
	@CrossOrigin
	@PostMapping("/supplierForm/update")
	public CommonResult updateSupplierForm(@Valid @RequestBody SupplierFormParam supplierFormParam) {
		int result = supplierFormService.updateSupplierFormColumn(supplierFormParam);
		
		if(result > 0) {
			return responseService.getSuccessResult(result);
		} else {
			throw new CSupplierFormUpdateException();
		}
	}
	
	@CrossOrigin
	@PostMapping("/supplierForm/delete")
	public CommonResult deleteSupplierForm(@Valid @RequestBody SupplierFormParam[] supplierFormParam) {
		boolean result = supplierFormService.deleteSupplierForm(supplierFormParam);
		
		if(result == true) {
			return responseService.getSuccessResult();
		} else {
			throw new CSupplierFormDeleteException();
		}
	}
	
	@CrossOrigin
	@PostMapping("/supplierForm/column/insert")
	public CommonResult insertSupplierFormColumn(@RequestHeader(value= "form_id") int form_id,
			@Valid @RequestBody SupplierFormParam[] supplierFormParam) {
		
		boolean result = supplierFormService.insertSupplierFormColumn(supplierFormParam, form_id);
		
		if(result == true) {
			return responseService.getSuccessResult();
		} else {
			throw new CSupplierFormColumnInsertException();
		}
	}
}

