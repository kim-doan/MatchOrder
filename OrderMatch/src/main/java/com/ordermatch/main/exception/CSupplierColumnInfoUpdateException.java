package com.ordermatch.main.exception;

public class CSupplierColumnInfoUpdateException extends RuntimeException {
    public CSupplierColumnInfoUpdateException(String msg, Throwable t) {
        super(msg, t);
    }

    public CSupplierColumnInfoUpdateException(String msg) {
        super(msg);
    }

    public CSupplierColumnInfoUpdateException() {
        super();
    }
}
