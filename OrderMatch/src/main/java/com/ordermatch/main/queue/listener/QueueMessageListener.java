package com.ordermatch.main.queue.listener;

import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class QueueMessageListener {
	
	@RabbitListener(queues = "order.queue")
	public void receiveMessage(final Message message) throws InterruptedException {
		Thread.sleep(5000);
		System.out.println(message);
	}
}
