import React from "react";
import useGitHub from "../../hooks/github-hooks";
import * as Styled from "./style";

function Profile() {
  const { github } = useGitHub();

  return (
    <Styled.Wrapper>
      <Styled.WrapperImage src={github.user.avatar_url} alt="Avatar" />
      <Styled.WrapperInfoUser>
        <div>
          <h1>{github.user.name}</h1>
          <Styled.WrapperUserName>
            <h3>Username: </h3>
            <a href={github.user.html_url} target="_blank" rel="noreferrer">
              {github.user.login}
            </a>
          </Styled.WrapperUserName>

          <div>
            <h3>Company: </h3>
            <span>{github.user.company}</span>
          </div>

          <div>
            <h3>Location: </h3>
            <span>{github.user.location}</span>
          </div>

          <div>
            <h3>Blog: </h3>
            <a href={github.user.blog} target="_blank" rel="noreferrer">{github.user.blog}</a>
          </div>
        </div>

        <Styled.WrapperStatusCounter>
          <div>
            <h4>Followers</h4>
            <span>{github.user.followers}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{github.user.public_gists}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>{github.user.following}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{github.user.public_repos}</span>
          </div>
        </Styled.WrapperStatusCounter>
      </Styled.WrapperInfoUser>
    </Styled.Wrapper>
  );
}

export default Profile;
