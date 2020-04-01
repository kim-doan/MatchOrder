package com.ordermatch.main.exception;

public class CSupplierFormUpdateException extends RuntimeException {
    public CSupplierFormUpdateException(String msg, Throwable t) {
        super(msg, t);
    }

    public CSupplierFormUpdateException(String msg) {
        super(msg);
    }

    public CSupplierFormUpdateException() {
        super();
    }
}
