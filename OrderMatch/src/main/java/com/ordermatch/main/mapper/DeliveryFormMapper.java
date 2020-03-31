package com.ordermatch.main.mapper;

import java.util.List;

import com.ordermatch.main.delivery.model.DeliveryCostInfo;

public interface DeliveryFormMapper {
	List<DeliveryCostInfo> findAllDeliveryForm(String form_name);
	
	boolean insertDeliveryForm(DeliveryCostInfo deliveryCostInfo);
	
	boolean updateDeliveryForm(DeliveryCostInfo deliveryCostInfo);
}
