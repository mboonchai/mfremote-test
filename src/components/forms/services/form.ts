
//import useNativeFetch from "@/hooks/useNativeFetch"
// import { API_METHOD, API_PATH } from "../constants";
// import { getUrlWithParams } from "../utils";

// //const fetch = useNativeFetch();

// export const serviceOpenForm = async (serviceCode: string, formId: string) => {
//   try {
//     const url = getUrlWithParams(API_PATH.OPEN_FORM, { serviceCode, formId });
//     const response = await fetch(url, {
//       method: API_METHOD.GET,
//     });
//     return { success: true, data: response };
//   } catch (err: any) {
//     return { success: false, message: err.message };
//   }
// };

// export const serviceSubmitForm = async (serviceCode: string, params: any) => {
//   try {
//     const url = getUrlWithParams(API_PATH.SUBMIT_FORM, { serviceCode });
//     const response = await fetch(url, {
//       method: API_METHOD.POST,
//       body: JSON.stringify(params),
//     });
//     return { success: true, data: response };
//   } catch (err: any) {
//     return { success: false, message: err.message };
//   }
// };

export default () => { }