/*
 * 2019.09.24
 * 김도안
 * resources/i18n/exception_ko.yml에 있는 code와 메시지를 가져와 결과값으로 전송하는 부분
 * 
 */

package com.ordermatch.main.exception.advice;

import javax.servlet.http.HttpServletRequest;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.ordermatch.main.exception.CAuthenticationEntryPointException;
import com.ordermatch.main.exception.CDeliveryCostFormDeleteException;
import com.ordermatch.main.exception.CDeliveryCostFormInsertException;
import com.ordermatch.main.exception.CDeliveryCostFormUpdateException;
import com.ordermatch.main.exception.CItemNotFoundException;
import com.ordermatch.main.exception.CLogoSaveErrorException;
import com.ordermatch.main.exception.CNotOwnerException;
import com.ordermatch.main.exception.CResourceNotExistException;
import com.ordermatch.main.exception.CSessionNotFoundException;
import com.ordermatch.main.exception.CSupplierColumnInfoInsertException;
import com.ordermatch.main.exception.CSupplierColumnInfoUpdateException;
import com.ordermatch.main.exception.CSupplierFormColumnInsertException;
import com.ordermatch.main.exception.CSupplierFormDeleteException;
import com.ordermatch.main.exception.CSupplierFormInsertException;
import com.ordermatch.main.exception.CSupplierFormUpdateException;
import com.ordermatch.main.exception.CUserDuplicateException;
import com.ordermatch.main.exception.CUserNotFoundException;
import com.ordermatch.main.response.model.CommonResult;
import com.ordermatch.main.response.service.ResponseService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestControllerAdvice
public class ExceptionAdvice {
	
	private final ResponseService responseService;
	
	private final MessageSource messageSource;
	
	private String getMessage(String code) {
		return getMessage(code, null);
	}
	
	private String getMessage(String code, Object[] args) {
		return messageSource.getMessage(code, args, LocaleContextHolder.getLocale());
	}
//	//알수없는 오류
//	@ExceptionHandler(Exception.class)
//	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
//	protected CommonResult defaultException(HttpServletRequest request, Exception e) {
//		//예외 처리 코드를 MessageSource에서 가져오도록 설정
//		return responseService.getFailResult(Integer.valueOf(getMessage("unKnown.code")), getMessage("unKnown.msg"));
//	}
	
	//요청한 세션이 비어있을 경우
	@ExceptionHandler(CSessionNotFoundException.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	protected CommonResult sessionNotFoundException(HttpServletRequest request, CSessionNotFoundException e) {
		return responseService.getFailResult(Integer.valueOf(getMessage("sessionNotFound.code")), getMessage("sessionNotFound.msg"));
	}
	
	//유저 정보 조회 오류
	@ExceptionHandler(CUserNotFoundException.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	protected CommonResult userNotFoundException(HttpServletRequest request, CUserNotFoundException e) {
		//예외 처리 코드를 MessageSource에서 가져오도록 설정
		return responseService.getFailResult(Integer.valueOf(getMessage("userNotFound.code")), getMessage("userNotFound.msg"));
	}
	
	//유저 아이디 중복
	@ExceptionHandler(CUserDuplicateException.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	protected CommonResult userDuplicateException(HttpServletRequest request, CUserDuplicateException e) {
		//예외 처리 코드를 MessageSource에서 가져오도록 설정
		return responseService.getFailResult(Integer.valueOf(getMessage("userDuplicate.code")), getMessage("userDuplicate.msg"));
	}
	
	//로고 추가 실패
	@ExceptionHandler(CLogoSaveErrorException.class)
	public CommonResult clogoSaveErrorException(HttpServletRequest request, CLogoSaveErrorException e) {
		return responseService.getFailResult(Integer.valueOf(getMessage("logoSaveError.code")), getMessage("logoSaveError.msg"));
	}
	
	//토큰 만료 및 없을 경우 오류 처리
	@ExceptionHandler(CAuthenticationEntryPointException.class)
	public CommonResult authenticationEntryPointException(HttpServletRequest request, CAuthenticationEntryPointException e) {
		return responseService.getFailResult(Integer.valueOf(getMessage("entryPointException.code")), getMessage("entryPointException.msg"));
	}
	
	//토큰 권한 오류
	@ExceptionHandler(AccessDeniedException.class)
	public CommonResult AccessDeniedException(HttpServletRequest request, AccessDeniedException e) {
		return responseService.getFailResult(Integer.valueOf(getMessage("accessDenied.code")), getMessage("accessDenied.msg"));
	}

	// 아이템 정보 조회 오류
	@ExceptionHandler(CItemNotFoundException.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	protected CommonResult userDuplicateException(HttpServletRequest request, CItemNotFoundException e) {
		//예외 처리 코드를 MessageSource에서 가져오도록 설정
		return responseService.getFailResult(Integer.valueOf(getMessage("itemNotFound.code")), getMessage("itemNotFound.msg"));
	}
	
	//(기준정보) 공급사 주문서 칼럼 정보 양식 추가 실패
	@ExceptionHandler(CSupplierColumnInfoInsertException.class)
	public CommonResult supplierColumnInfoInsertException(HttpServletRequest request, CSupplierColumnInfoInsertException e) {
		return responseService.getFailResult(Integer.valueOf(getMessage("supplierColumnInfoInsertError.code")), getMessage("supplierColumnInfoInsertError.msg"));
	}
	
	//(기준정보) 공급사 주문서 칼럼 정보 양식 수정 실패
	@ExceptionHandler(CSupplierColumnInfoUpdateException.class)
	public CommonResult supplierColumnInfoUpdateException(HttpServletRequest request, CSupplierColumnInfoUpdateException e) {
		return responseService.getFailResult(Integer.valueOf(getMessage("supplierColumnInfoUpdateError.code")), getMessage("supplierColumnInfoUpdateError.msg"));
	}
	
	//공급사 주문서 양식 추가 실패
	@ExceptionHandler(CSupplierFormInsertException.class)
	public CommonResult csupplierFormInsertException(HttpServletRequest request, CSupplierColumnInfoInsertException e) {
		return responseService.getFailResult(Integer.valueOf(getMessage("supplierFormInsertError.code")), getMessage("supplierFormInsertError.msg"));
	}
	
	//공급사 주문서 양식 수정 실패
	@ExceptionHandler(CSupplierFormDeleteException.class)
	public CommonResult csupplierFormDeleteException(HttpServletRequest request, CSupplierFormDeleteException e) {
		return responseService.getFailResult(Integer.valueOf(getMessage("supplierFormDeleteError.code")), getMessage("supplierFormDeleteError.msg"));
	}
	
	//공급사 주문서 컬럼 정보 추가 실패
	@ExceptionHandler(CSupplierFormColumnInsertException.class)
	public CommonResult csupplierFormColumnInsertException(HttpServletRequest request, CSupplierFormColumnInsertException e) {
		return responseService.getFailResult(Integer.valueOf(getMessage("supplierFormColumnInsertError.code")), getMessage("supplierFormColumnInsertError.msg"));
	}
	
	//배송비 양식 정보 추가 실패
	@ExceptionHandler(CDeliveryCostFormInsertException.class)
	public CommonResult cdeliveryCostFormInsertException(HttpServletRequest request, CDeliveryCostFormInsertException e) {
		return responseService.getFailResult(Integer.valueOf(getMessage("deliveryCostInfoInsertError.code")), getMessage("deliveryCostInfoInsertError.msg"));
	}
	
	//배송비 양식 정보 수정 실패
	@ExceptionHandler(CDeliveryCostFormUpdateException.class)
	public CommonResult cdeliveryCostFormUpdateException(HttpServletRequest request, CDeliveryCostFormUpdateException e) {
		return responseService.getFailResult(Integer.valueOf(getMessage("deliveryCostInfoUpdateError.code")), getMessage("deliveryCostInfoUpdateError.msg"));
	}
	
	//배송비 양식 정보 삭제 실패
	@ExceptionHandler(CDeliveryCostFormDeleteException.class)
	public CommonResult cdeliveryCostFormDeleteException(HttpServletRequest request, CDeliveryCostFormDeleteException e) {
		return responseService.getFailResult(Integer.valueOf(getMessage("deliveryCostInfoDeleteError.code")), getMessage("deliveryCostInfoDeleteError.msg"));
	}
}