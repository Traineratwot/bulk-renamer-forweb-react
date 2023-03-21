export interface authReqApi {
	host: string,
	userName: string,
	userPass: string,
}

export interface authResApi {
	isAuthenticated: boolean
}
