package com.ordermatch.main.exception;

public class CItemNotFoundException extends RuntimeException {
    public CItemNotFoundException(String msg, Throwable t) {
        super(msg, t);
    }

    public CItemNotFoundException(String msg) {
        super(msg);
    }

    public CItemNotFoundException() {
        super();
    }
}
