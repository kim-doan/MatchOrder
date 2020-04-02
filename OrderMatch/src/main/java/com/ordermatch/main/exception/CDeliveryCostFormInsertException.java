package com.ordermatch.main.exception;

public class CDeliveryCostFormInsertException extends RuntimeException {
    public CDeliveryCostFormInsertException(String msg, Throwable t) {
        super(msg, t);
    }

    public CDeliveryCostFormInsertException(String msg) {
        super(msg);
    }

    public CDeliveryCostFormInsertException() {
        super();
    }
}
