package com.ordermatch.main.exception;

public class CSupplierFormColumnInsertException extends RuntimeException {
    public CSupplierFormColumnInsertException(String msg, Throwable t) {
        super(msg, t);
    }

    public CSupplierFormColumnInsertException(String msg) {
        super(msg);
    }

    public CSupplierFormColumnInsertException() {
        super();
    }
}
