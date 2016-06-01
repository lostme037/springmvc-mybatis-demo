package com.tyxj.common.exception;

/**
 * 
 * @ClassName: UserNotLoginException
 * @Description: 自定义用户登录异常
 * @author LiDu
 * @Date: 2016年5月12日 下午5:21:27
 *
 */
public class DeviceMasterSerialDuplicateException extends UserInputException{

	/**
	 * 序列号
	 */
	private static final long serialVersionUID = 7132495062317028028L;
	
	public DeviceMasterSerialDuplicateException(){
		super("设备编号已经存在,不允许重复");
	}
	public DeviceMasterSerialDuplicateException(String message){
		super(message);
	}
}
