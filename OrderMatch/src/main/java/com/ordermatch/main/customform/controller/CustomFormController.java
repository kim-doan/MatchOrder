package com.ordermatch.main.customform.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ordermatch.main.customform.model.CustomForm;
import com.ordermatch.main.customform.model.CustomFormColumn;
import com.ordermatch.main.customform.model.CustomFormList;
import com.ordermatch.main.customform.service.CustomFormService;
import com.ordermatch.main.response.model.CommonResult;
import com.ordermatch.main.response.model.ListResult;
import com.ordermatch.main.response.service.ResponseService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class CustomFormController {
	
	@Autowired
	private ResponseService responseService;
	
	@Autowired
	private CustomFormService customFormService;
	
	@CrossOrigin
	@GetMapping("/customForm/{user_id}")
	public ListResult<CustomForm> findAllCustomMenu(@PathVariable(value = "user_id") int user_id) {
		return responseService.getListResult(customFormService.findAllCustomMenu(user_id));
	}
	
	@CrossOrigin
	@PostMapping("/customForm/insert")
	public CommonResult insertCustomMenu(@Valid @RequestBody CustomForm customForm) {
		boolean result = customFormService.insertCustomMenu(customForm);
		
		if(result == true) {
			return responseService.getSuccessResult();
		} else {
			return responseService.getFailResult(-9999, "실패했습니다.");
		}
	}
	
	@CrossOrigin
	@PostMapping("/customForm/column/insert")
	public CommonResult insertCustomMenuColumn(@Valid @RequestBody CustomFormColumn customFormColumn) {
		boolean result = customFormService.insertCustomMenuColumn(customFormColumn);
		
		if(result == true) {
			return responseService.getSuccessResult();
		} else {
			return responseService.getFailResult(-999, "실패했습니다");
		}
	}
	
	@CrossOrigin
	@GetMapping("/customForm/headers")
	public ListResult<CustomFormList> findByCustomHeader() {
		return responseService.getListResult(customFormService.findAllCustomForm());
	}
	
	@CrossOrigin
	@PostMapping("/customForm/search")
	public void searchCustomForm(@Valid @RequestBody CustomFormList customFormListParam) {
		List<CustomFormList> customFormList = customFormService.findAllCustomForm();
		
		for(int i=0;i<customFormList.size();i++) {
			//헤더 개수 체크
			if(customFormList.get(i).getHeaderCnt() == customFormListParam.getHeaderCnt()) { 
				//개수가 맞을경우 주소지와 네임 컬럼 헤더가 맞는지 확인
				if(customFormList.get(i).getAddress().equals(customFormListParam.getAddress()) &&
						customFormList.get(i).getName().equals(customFormListParam.getName())) {
					System.out.println("이 양식은" + customFormList.get(i).getForm_code() + " 입니다.");
					break;
				}
			}
		}
	}
}
