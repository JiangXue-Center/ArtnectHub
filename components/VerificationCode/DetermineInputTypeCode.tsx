// 创建验证手机号码的模式
import {z} from "zod";

const phoneNumberSchema = z
    .string()
    .refine((value) => /^\d{11}$/.test(value), {
        message: "请输入有效的手机号码",
    });

// 创建验证邮箱的模式
const emailSchema = z
    .string()
    .email({
        message: "请输入有效的邮箱地址",
    });

// 根据用户输入判断是手机号还是邮箱

const DetermineInputTypeCode = (certificate: string) => {
    //1是邮箱验证码,3是手机号验证码
    if (emailSchema.safeParse(certificate).success) {
        return "1";
    } else if (phoneNumberSchema.safeParse(certificate).success) {
        return "3";
    } else {
        return "无效输入";
    }
}


export default DetermineInputTypeCode