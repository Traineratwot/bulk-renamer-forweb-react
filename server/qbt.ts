import qbt from 'qbittorrent-api-v2'

class QBT {
	private loggedIn: boolean = false
	private qbt!: qbt.QBittorrentApiEndpoint
	// constructor() {}

	public async getTorrents() {
		// get all torrents
	}
	public async login(host: string, username: string, password: string) {
		// login
		this.qbt = await qbt.connect(host, username, password)
	}
}


export default QBT
