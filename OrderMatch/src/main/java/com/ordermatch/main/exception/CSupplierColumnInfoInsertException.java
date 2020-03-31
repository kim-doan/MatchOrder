package com.ordermatch.main.exception;

public class CSupplierColumnInfoInsertException extends RuntimeException {
    public CSupplierColumnInfoInsertException(String msg, Throwable t) {
        super(msg, t);
    }

    public CSupplierColumnInfoInsertException(String msg) {
        super(msg);
    }

    public CSupplierColumnInfoInsertException() {
        super();
    }
}
