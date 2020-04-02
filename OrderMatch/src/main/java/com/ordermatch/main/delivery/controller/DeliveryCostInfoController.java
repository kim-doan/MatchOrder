package com.ordermatch.main.delivery.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ordermatch.main.delivery.model.DeliveryCostInfo;
import com.ordermatch.main.delivery.service.DeliveryCostInfoService;
import com.ordermatch.main.exception.CDeliveryCostFormInsertException;
import com.ordermatch.main.exception.CDeliveryCostFormUpdateException;
import com.ordermatch.main.exception.CUserNotFoundException;
import com.ordermatch.main.response.model.CommonResult;
import com.ordermatch.main.response.model.ListResult;
import com.ordermatch.main.response.service.ResponseService;
import com.ordermatch.main.user.model.User;
import com.ordermatch.main.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class DeliveryCostInfoController {
	@Autowired
	private ResponseService responseService;
	
	@Autowired
	private DeliveryCostInfoService deliveryCostInfoService;
	
	@Autowired
	private UserService userService;
	
	@CrossOrigin
	@PostMapping("/deliveryCostForm")
	public ListResult<DeliveryCostInfo> findAllDeliveryForm(@RequestHeader(value="username") String username,
			@Valid @RequestBody DeliveryCostInfo deliveryCostInfo) {
		User user = userService.findByTokenUsername(username).orElseThrow(CUserNotFoundException::new);
		deliveryCostInfo.setUser_id(user.getUser_id());
		
		return responseService.getListResult(deliveryCostInfoService.findAllDeliveryForm(deliveryCostInfo));
	}
	
	@CrossOrigin
	@PostMapping("/deliveryCostForm/insert")
	public CommonResult insertDeliveryForm(@RequestHeader(value="username") String username,
			@Valid @RequestBody DeliveryCostInfo deliveryCostInfo) {
		User user = userService.findByTokenUsername(username).orElseThrow(CUserNotFoundException::new);
		deliveryCostInfo.setUser_id(user.getUser_id());
		
		boolean result = deliveryCostInfoService.insertDeliveryForm(deliveryCostInfo);
		
		if(result == true) {
			return responseService.getSuccessResult();
		} else {
			throw new CDeliveryCostFormInsertException();
		}
	}
	
	@CrossOrigin
	@PostMapping("/deliveryCostForm/update")
	public CommonResult updateDeliveryForm(@Valid @RequestBody DeliveryCostInfo deliveryCostInfo) {
		boolean result = deliveryCostInfoService.updateDeliveryForm(deliveryCostInfo);
		
		if(result == true) {
			return responseService.getSuccessResult();
		} else {
//			throw new CDeliveryCostFormUpdateException();
		}
		
		return null;
	}
}
