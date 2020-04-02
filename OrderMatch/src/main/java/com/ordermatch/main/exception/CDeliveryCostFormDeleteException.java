package com.ordermatch.main.exception;

public class CDeliveryCostFormDeleteException extends RuntimeException {
    public CDeliveryCostFormDeleteException(String msg, Throwable t) {
        super(msg, t);
    }

    public CDeliveryCostFormDeleteException(String msg) {
        super(msg);
    }

    public CDeliveryCostFormDeleteException() {
        super();
    }
}
