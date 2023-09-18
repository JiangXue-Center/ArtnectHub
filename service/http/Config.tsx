/**配置axios**/
// 开发url
const devBaseURL = "111";
const proBaseURL = "222";
export const BASE_URL = process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL

export const TIMEOUT = 5000;