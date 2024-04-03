import axios from "axios";
import { Member, SignUpMember, UpdateMemberData } from "../types/member";
import assert from "assert";
import Definer from "../../lib/Definer";
import { serverApi } from "../../lib/config"

export class MemberServiceApi {
    private readonly path: string
    constructor() {
        this.path = serverApi
    }

    async memberRequestSignUp(data: SignUpMember): Promise<Member> {
        try {
            const url = `${this.path}/signup`;
            const result = await axios.post(url, data, { withCredentials: true });
            console.log("signUpRequest state::", result.data.state);
            const costumize_error = result.data.message ? new Error(result.data.message.includes("duplicate") ? Definer.user_err1 : result.data.message) : ""
            assert.ok(result?.data?.state != "fail", costumize_error);
            const member: Member = result.data.value;
            localStorage.setItem("member_data", JSON.stringify(member));
            return member;
        } catch (err: any) {
            console.log(`ERROR::: memberRequestSignUp, ${err.message}`)
            throw err
        }
    }

    async logoutRequest(): Promise<Member> {
        try {
            const url = `${serverApi}/logout`,
                result = await axios.get(url, { withCredentials: true });
            const member: Member = result.data.value;
            return member
        } catch (err: any) {
            console.log(`ERROR::: memberRequestSignUp, ${err.message}`)
            throw err
        }
    }

    async loginRequest(loginData: any): Promise<Member> {
        try {
            const url = `${serverApi}/login`
            const result = await axios.post(url, loginData, { withCredentials: true });
            console.log("signUpRequest state::", result.data.state);
            if (result.data.state == "fail") {
                throw new Error(result.data.message)
            }
            const member: Member = result.data.value;
            localStorage.setItem("member_data", JSON.stringify(member))
            return member
        } catch (err) {
            console.log(`ERROR: loginRequest, ${err}`)
            throw err
        }
    }

    async updateMember(data: UpdateMemberData): Promise<Member> {
        try {
            const formData = new FormData();
            formData.append("mb_nick", data.mb_nick ?? "");
            formData.append("mb_image", data.mb_image ?? "");
            formData.append("mb_phone", data.mb_phone ?? "");
            formData.append("mb_email", data.mb_email ?? "");
            formData.append("mb_password", data.mb_password ?? "")
            formData.append("mb_address", data.mb_address ?? "")

            const url = `${serverApi}/member/member-edit`
            const result = await axios(url, {
                method: "POST",
                data: formData,
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            console.log("POST: updateMemberData state ", result.data.state);
            const updatedMember: Member = result.data.value;
            const jsonMemberData = JSON.stringify(updatedMember);
            localStorage.removeItem("member_data");
            localStorage.setItem("member_data", jsonMemberData)
            return updatedMember
        } catch (err: any) {
            throw err
        }
    }

    async resetPasswordData(data: { old_password: string, new_password: string }): Promise<Member> {
        try {
            const url = `${serverApi}/member/resetPassword`
            const result = await axios.post(url, data, { withCredentials: true })
            console.log("POST: resetPasswordData state ", result.data.state);
            if (result.data.state === "fail") {
                throw new Error(result.data.message)
            }
            const updatedMember: Member = result.data.value;
            const jsonMemberData = JSON.stringify(updatedMember);
            localStorage.removeItem("member_data");
            localStorage.setItem("member_data", jsonMemberData)
            return updatedMember
        } catch (err: any) {
            throw err
        }
    }
}