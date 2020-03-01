package com.ordermatch.main.customform.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ordermatch.main.customform.model.CustomForm;
import com.ordermatch.main.customform.model.CustomFormColumn;
import com.ordermatch.main.customform.model.CustomFormList;
import com.ordermatch.main.customform.model.CustomFormParam;
import com.ordermatch.main.mapper.CustomFormMapper;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class CustomFormService {
	
	@Autowired
	private CustomFormMapper customFormMapper;
	
	//해당 아이디의 모든 커스텀 양식 불러오기
	public List<CustomForm> findAllCustomMenu(int user_id) {
		List<CustomForm> customForm = customFormMapper.findAllCustomMenu(user_id);
		
		return customForm;
	}
	
	//해당 아이디의 모든 커스텀 양식을 form_name으로 불러오기
	public List<CustomForm> findByFormName(CustomFormParam customFormParam) {
		List<CustomForm> customForm = customFormMapper.findByFormName(customFormParam);
		
		return customForm;
	}
	
	//커스텀 양식 추가
	public boolean insertCustomMenu(CustomForm customForm) {
		boolean result = customFormMapper.insertCustomMenu(customForm);
		
		return result;
	}
	
	//커스텀 양식 헤더 추가
	public boolean insertCustomMenuColumn(CustomFormColumn customFormColumn) {
		boolean result = customFormMapper.insertCustomMenuColumn(customFormColumn);
		
		return result;
	}
	
	//커스텀 양식 헤더 불러오기
	public List<CustomFormList> findAllCustomForm() {
		return customFormMapper.findAllCustomForm();
	}
}
