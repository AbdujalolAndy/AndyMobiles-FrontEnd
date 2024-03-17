import axios from "axios";
import { Member, SignUpMember } from "../types/member";
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
}