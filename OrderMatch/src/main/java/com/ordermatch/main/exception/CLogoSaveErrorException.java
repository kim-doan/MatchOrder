package com.ordermatch.main.exception;

public class CLogoSaveErrorException extends RuntimeException {
	private static final long serialVersionUID = 2241549550934267615L;
	
	public CLogoSaveErrorException(String msg, Throwable t) {
		super(msg, t);
	}
	public CLogoSaveErrorException(String msg) {
		super(msg);
	}
	public CLogoSaveErrorException() {
		super();
	}
}

