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
const DetermineInputType = (certificate: string) => {
    //1是手机号，2是验证码
    if (phoneNumberSchema.safeParse(certificate).success) {
        return "1";
    } else if (emailSchema.safeParse(certificate).success) {
        return "2";
    }else {
        return "无效输入";
    }
}

export default DetermineInputType