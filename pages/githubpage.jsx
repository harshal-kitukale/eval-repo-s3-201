import React, { useEffect } from "react";

const Githubpage = () => {
	const [udata, setData] = React.useState([]);
	const [repo, setRepo] = React.useState([]);
	const getRepoData = async () => {
		let username = "harshal-kitukale";
		let response = await fetch(
			`https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=updated&per_page=10&type=Repositories`,
		);
		let data = await response.json();
		setRepo(data.items);
	};
	const getGitData = async () => {
		let username = "harshal-kitukale";
		let response = await fetch(`https://api.github.com/users/${username}`);
		let data = await response.json();
		setData(data);
	};
	useEffect(() => {
		getGitData();
		getRepoData();
	}, []);
	console.log("Udata", udata);
	console.log("repo", repo);

	return (
		<div>
			<div>
				<img
					style={{ width: "10%", height: "10%", borderRadius: "100%" }}
					src={udata.avatar_url}
				/>
				<div>
					<h1>{udata.name}</h1>
					<h1>{udata.bio}</h1>
					<h3>{udata.blog}</h3>
					<p>
						<h3>{udata.followers}</h3>
						<h3>{udata.following}</h3>
					</p>
				</div>
			</div>
			<div style={{ display: "grid", justifyContent: "center" }}>
				<h1>Projects[{repo.length}]</h1>
				{repo &&
					repo.map((r) => (
						<h3 key={r.id}>
							{r.name}---
							{r.created_at}
						</h3>
					))}
			</div>
		</div>
	);
};

export default Githubpage;
