package com.ordermatch.main.queue.controller;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;import com.rabbitmq.client.AMQP.Exchange;

@RestController
@RequestMapping("/api")
public class QueueController {

	private final RabbitTemplate rabbitTemplate;
	private static final String EXCHANGE_NAME = "repository.topic";
	
	public QueueController(RabbitTemplate rabbitTemplate) {
		this.rabbitTemplate = rabbitTemplate;
	}
	
	@GetMapping("/test")
	public void testMessagePub() {
		rabbitTemplate.convertAndSend(EXCHANGE_NAME, "order.template.first", "Message1234");
	}
}
