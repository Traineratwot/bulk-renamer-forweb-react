import React, { useEffect, useRef, useState } from "react"
import { Dropdown } from "primereact/dropdown"
import "./style/index.scss"
import { InputText } from "primereact/inputtext"
import { InputNumber } from "primereact/inputnumber"
import { Password } from "primereact/password"
import { Button } from "primereact/button"

function App() {
	const [selectedServer, setSelectedServer] = useState(null)
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


	return <>
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
					<Button style={{ width: "250px" }} label="Submit" type="submit" icon="pi pi-check" />
				</p>
			</div>
		</section>
	</>
}

export default App
