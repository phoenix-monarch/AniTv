// COMPONENTS
import loadable from "@loadable/component"
import { CardGroup } from "react-bootstrap"
import "./home.css"
import useDocumentTitle from "../DocumentTitleHook"
import AnimeCollectionCard from "../AnimeCollectionCard"
const NewAnime = loadable(() => import("../NewAnime"))
const MostWatched = loadable(() => import("../MostWatched"))
const RandomAnime = loadable(() => import("../RandomAnime"))

function Home({ instance }) {
	useDocumentTitle("Trang chủ - Unime")

	return (
		<>
			<div className="anime-card" style={{ marginTop: "42px" }}>
				<h2
					className="anime-h1"
					style={{ marginBottom: "42px", width: "200px" }}
				>
					MỚI NHẤT
				</h2>
				<CardGroup>
					<NewAnime instance={instance} />
				</CardGroup>
			</div>

			<div className="anime-card-today" style={{ marginTop: "42px" }}>
				<div className="center-title">
					<h2 className="anime-top-day-h2" style={{ marginBottom: "42px" }}>
						XEM NHIỀU TRONG NGÀY
					</h2>
				</div>
				<CardGroup>
					<MostWatched instance={instance} />
				</CardGroup>
			</div>

			<div className="anime-collection" style={{ marginTop: "42px" }}>
				<div className="center-title">
					<div className="anime-collection-titleholder">
						<h2
							className="anime-collection-h2"
							style={{ marginBottom: "42px" }}
						>
							BỘ SƯU TẬP
						</h2>
					</div>
					<AnimeCollectionCard />
				</div>
			</div>
			<RandomAnime instance={instance} />
		</>
	)
}

export default Home
