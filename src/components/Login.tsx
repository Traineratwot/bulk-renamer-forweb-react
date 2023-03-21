import { Dropdown } from "primereact/dropdown"
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import { Button } from "primereact/button"
import React, { useEffect, useState } from "react"
import UseGlobalStore from "../store/GlobalStore"
import { authResApi } from "../../API"
import api from "../model/api"

export const Login = () => {
	const setAuthentication = UseGlobalStore(state => state.setAuthentication)

	const [selectedServer, setSelectedServer] = useState("")
	const [userName, setUserName] = useState<string>("admin")
	const [userPass, setUserPass] = useState<string>("adminadmin")

	const [servers, setServers] = useState([])
	useEffect(() => {
		fetch("/api/serverSuggested").then(async (response) => {
			const data = await response.json()
			setServers(data.map((item: { server: string }) => {
				return { name: item.server, code: item.server }
			}))
		})
	}, [])

	const auth = async () => {
		api.auth({
			userPass,
			userName,
			host: selectedServer,
		})
			.then((res) => {
				setAuthentication(res.isAuthenticated)
			})
	}

	return (
		<>
			<section className="container">
				<div className="content">
					<p>
						<Dropdown style={{ width: "250px" }} value={selectedServer}
								  onChange={(e) => setSelectedServer(e.value)}
								  options={servers}
								  optionLabel="name"
								  name="server"
								  editable placeholder="Select a Qb Server" className="w-full md:w-14rem" />
					</p>
					<p>
						<div className="p-inputgroup">
						<span className="p-inputgroup-addon">
							<i className="pi pi-user"></i>
						</span>
							<InputText value={userName} onChange={(e) => setUserName(e.target.value)}
									   placeholder="Username" />
						</div>
					</p>
					<p>
						<div className="p-inputgroup">
						<span className="p-inputgroup-addon">
							<i className="pi pi-key"></i>
						</span>
							<Password
								value={userPass} onChange={(e) => setUserPass(e.target.value)}
								placeholder="Password" feedback={false} />
						</div>
					</p>
					<p>
						<Button style={{ width: "250px" }} onClick={auth} label="Submit" type="submit"
								icon="pi pi-check" />
					</p>
				</div>
			</section>
		</>
	)
}
