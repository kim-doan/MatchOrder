package com.ordermatch.main.exception;

public class CSupplierFormInsertException extends RuntimeException {
    public CSupplierFormInsertException(String msg, Throwable t) {
        super(msg, t);
    }

    public CSupplierFormInsertException(String msg) {
        super(msg);
    }

    public CSupplierFormInsertException() {
        super();
    }
}
