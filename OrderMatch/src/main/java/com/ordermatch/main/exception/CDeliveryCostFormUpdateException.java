package com.ordermatch.main.exception;

public class CDeliveryCostFormUpdateException extends RuntimeException {
    public CDeliveryCostFormUpdateException(String msg, Throwable t) {
        super(msg, t);
    }

    public CDeliveryCostFormUpdateException(String msg) {
        super(msg);
    }

    public CDeliveryCostFormUpdateException() {
        super();
    }
}
