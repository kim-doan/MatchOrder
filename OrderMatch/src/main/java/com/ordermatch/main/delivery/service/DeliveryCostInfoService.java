package com.ordermatch.main.delivery.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ordermatch.main.delivery.model.DeliveryCostInfo;
import com.ordermatch.main.mapper.DeliveryFormMapper;

@Service
@Transactional
public class DeliveryCostInfoService {
	@Autowired
	private DeliveryFormMapper deliveryFormMapper;
	
	public List<DeliveryCostInfo> findAllDeliveryForm(DeliveryCostInfo deliveryCostInfo) {
		return deliveryFormMapper.findAllDeliveryForm(deliveryCostInfo);
	}
	
	public boolean insertDeliveryForm(DeliveryCostInfo deliveryCostInfo) {
		return deliveryFormMapper.insertDeliveryForm(deliveryCostInfo);
	}
	
	public boolean updateDeliveryForm(DeliveryCostInfo deliveryCostInfo) {
		boolean result = false;
		try {
		result = deliveryFormMapper.updateDeliveryForm(deliveryCostInfo);
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
}
