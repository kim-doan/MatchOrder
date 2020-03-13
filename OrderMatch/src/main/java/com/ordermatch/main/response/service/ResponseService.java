package com.ordermatch.main.response.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ordermatch.main.response.model.CommonResult;
import com.ordermatch.main.response.model.ListResult;
import com.ordermatch.main.response.model.LoginResult;
import com.ordermatch.main.response.model.SingleResult;

@Service
public class ResponseService {

    // enum으로 api 요청 결과에 대한 code, message를 정의합니다.
    public enum CommonResponse {
        SUCCESS(0, "성공하였습니다.");

        int code;
        String msg;
        String id;

        CommonResponse(int code, String msg) {
            this.code = code;
            this.msg = msg;
        }

        CommonResponse(int code, String msg, String id) {
            this.code = code;
            this.msg = msg;
            this.id = id;
        }
        
        public int getCode() {
            return code;
        }

        public String getMsg() {
            return msg;
        }
        
        public String getId() {
        	return id;
        }
    }
    // 단일건 결과를 처리하는 메소드
    public <T> SingleResult<T> getSingleResult(T data) {
        SingleResult<T> result = new SingleResult<>();
        result.setData(data);
        setSuccessResult(result);
        return result;
    }
    // 다중건 결과를 처리하는 메소드
    public <T> ListResult<T> getListResult(List<T> list) {
        ListResult<T> result = new ListResult<>();
        result.setList(list);
        setSuccessResult(result);
        return result;
    }
    // 성공 결과만 처리하는 메소드
    public CommonResult getSuccessResult() {
        CommonResult result = new CommonResult();
        setSuccessResult(result);
        return result;
    }
    
    // 성공 결과 + cellId값 반환리는 메소드
    public CommonResult getSuccessResult(int id) {
        CommonResult result = new CommonResult();
        result.setId(id);
        setSuccessResult(result);
        return result;
    }
    
    // 로그인 결과만 처리하는 메소드
    public LoginResult getLoginResult(String token) {
        LoginResult result = new LoginResult();
        setLoginSuccessResult(result, token);
        return result;
    }
    
    // 실패 결과만 처리하는 메소드
    public CommonResult getFailResult(int code, String msg) {
        CommonResult result = new CommonResult();
        result.setSuccess(false);
        result.setCode(code);
        result.setMsg(msg);
        return result;
    }
    
    // 로그인 실패 결과만 처리하는 메소드
    public LoginResult getLoginFailResult(int code, String msg) {
        LoginResult result = new LoginResult();
        result.setSuccess(false);
        result.setCode(code);
        result.setMsg(msg);
        return result;
    }
    // 결과 모델에 api 요청 성공 데이터를 세팅해주는 메소드
    private void setSuccessResult(CommonResult result) {
        result.setSuccess(true);
        result.setCode(CommonResponse.SUCCESS.getCode());
        result.setMsg(CommonResponse.SUCCESS.getMsg());
    }
    
    // 로그인 결과 모델에 api 요청 성공 데이터를 세팅해주는 메소드
    private void setLoginSuccessResult(LoginResult result, String token) {
        result.setSuccess(true);
        result.setCode(CommonResponse.SUCCESS.getCode());
        result.setMsg(CommonResponse.SUCCESS.getMsg());
        result.setToken(token);
    }
}
