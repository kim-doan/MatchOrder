package com.ordermatch.main.exception;

public class CSupplierFormDeleteException extends RuntimeException {
    public CSupplierFormDeleteException(String msg, Throwable t) {
        super(msg, t);
    }

    public CSupplierFormDeleteException(String msg) {
        super(msg);
    }

    public CSupplierFormDeleteException() {
        super();
    }
}
