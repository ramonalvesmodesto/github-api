import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGitHub = () => {
    const {github, getUser, getUserRepos, getUserStarred} = useContext(GithubContext);

    return {github, getUser, getUserRepos, getUserStarred};
}

export default useGitHub;