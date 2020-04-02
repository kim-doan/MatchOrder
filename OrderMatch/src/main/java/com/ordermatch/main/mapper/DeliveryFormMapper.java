package com.ordermatch.main.mapper;

import java.util.List;

import com.ordermatch.main.delivery.model.DeliveryCostInfo;

public interface DeliveryFormMapper {
	//배송비 양식 조회
	List<DeliveryCostInfo> findAllDeliveryForm(DeliveryCostInfo deliveryCostInfo);
	
	//배송비 양식 추가
	boolean insertDeliveryForm(DeliveryCostInfo deliveryCostInfo);
	
	//배송비 양식 수정
	boolean updateDeliveryForm(DeliveryCostInfo deliveryCostInfo);
}
