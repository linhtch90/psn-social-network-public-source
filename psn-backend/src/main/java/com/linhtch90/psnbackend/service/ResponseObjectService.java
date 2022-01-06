package com.linhtch90.psnbackend.service;

public class ResponseObjectService {
    private String status;
    private String message;
    private Object payload;
    public ResponseObjectService(String status, String message, Object payload) {
        this.status = status;
        this.message = message;
        this.payload = payload;
    }
    public ResponseObjectService() {
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public Object getPayload() {
        return payload;
    }
    public void setPayload(Object payload) {
        this.payload = payload;
    }
    
}
