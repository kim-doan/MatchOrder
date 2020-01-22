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
import com.ordermatch.main.exception.CItemNotFoundException;
import com.ordermatch.main.exception.CNotOwnerException;
import com.ordermatch.main.exception.CResourceNotExistException;
import com.ordermatch.main.exception.CSessionNotFoundException;
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
	private String getMessage(String code) {
		return getMessage(code, null);
	}
	
	private String getMessage(String code, Object[] args) {
		return messageSource.getMessage(code, args, LocaleContextHolder.getLocale());
	}
	// 아이템 정보 조회 오류
	@ExceptionHandler(CItemNotFoundException.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	protected CommonResult userDuplicateException(HttpServletRequest request, CItemNotFoundException e) {
		//예외 처리 코드를 MessageSource에서 가져오도록 설정
		return responseService.getFailResult(Integer.valueOf(getMessage("itemNotFound.code")), getMessage("itemNotFound.msg"));
	}
	// 게시판 수정 실패시
	@ExceptionHandler(CNotOwnerException.class)
	@ResponseStatus(HttpStatus.NON_AUTHORITATIVE_INFORMATION)
	public CommonResult notOwnerException(HttpServletRequest request, CNotOwnerException e) {
	    return responseService.getFailResult(Integer.valueOf(getMessage("notOwner.code")), getMessage("notOwner.msg"));
	}
	// 해당 게시판이 없을 경우
	@ExceptionHandler(CResourceNotExistException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public CommonResult resourceNotExistException(HttpServletRequest request, CResourceNotExistException e) {
	    return responseService.getFailResult(Integer.valueOf(getMessage("resourceNotExist.code")), getMessage("resourceNotExist.msg"));
	}
}