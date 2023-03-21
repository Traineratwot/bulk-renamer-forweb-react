import { authReqApi, authResApi } from "../../API"

class Api {
	async auth(data: authReqApi): Promise<authResApi> {
		if (process.env.NODE_ENV !== "production") {
			return { isAuthenticated: true }
		}
		const r = await fetch("/api/login", {
			body: JSON.stringify(data),
		})
		return r.json()
	}
}

export const api = new Api()
export default api
