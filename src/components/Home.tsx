import "../style/Home.scss"

export const Home = () => {
	return (
		<>
			<div className="container">
				<div className="torrentList"></div>
				<div className="DashBoard">
					<div className="FolderTree"></div>
					<div className="FileList"></div>
					<div className="FileListAfterRename"></div>
					<div className="RenameTools"></div>
				</div>
			</div>
		</>
	)
}
