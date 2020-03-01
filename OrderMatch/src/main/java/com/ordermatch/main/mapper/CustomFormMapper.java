package com.ordermatch.main.mapper;

import java.util.List;

import com.ordermatch.main.customform.model.CustomForm;
import com.ordermatch.main.customform.model.CustomFormColumn;
import com.ordermatch.main.customform.model.CustomFormList;
import com.ordermatch.main.customform.model.CustomFormParam;

public interface CustomFormMapper {
	
	//해당 아이디의 모든 커스텀 양식 불러오기
	List<CustomForm> findAllCustomMenu(int user_id);
	
	//해당 아이디의 모든 커스텀 양식을 form_name으로 불러오기
	List<CustomForm> findByFormName(CustomFormParam customFormParam);
	
	//커스텀 양식 추가
	boolean insertCustomMenu(CustomForm customForm);
	
	//커스텀 양식 헤더 추가
	boolean insertCustomMenuColumn(CustomFormColumn customFormColumn);
	
	//커스텀 양식 헤더 가져오기
	List<CustomFormList> findAllCustomForm();
}
