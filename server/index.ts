import express from "express"
import bodyParser from "body-parser"
import path from "path"
import open from "open"
import tcpPortUsed from "tcp-port-used"
const app = express()
app.use(express.static(path.join(__dirname, "build")))
app.use(bodyParser.json({ type: "application/*+json" }))

app.get("/api/serverSuggested", function (req, res) {
	// suggest default server
	res.send([{ server: "http://localhost:8080", port: 8080, ip: "localhost" }])
})

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"))
})

async function getPort() {
	if (process.env.PORT) {
		const used = await tcpPortUsed
			.check(parseInt(process.env.PORT))
			.catch(() => true)
		if (used) throw new Error(`Port ${process.env.PORT} is already in use`)
		return parseInt(process.env.PORT)
	}
	for (let i = 8081; i < 8100; i++) {
		const used = await tcpPortUsed.check(i).catch(() => true)
		if (!used) return i
	}
	throw new Error("No free port found")
}

async function start() {
	const port = await getPort()
	app.listen(port, () => {
		open(`http://localhost:${port}`)
	})
}
start()
