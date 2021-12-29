import React from "react";
import useGithub from "../../hooks/github-hooks";
import { Image, InfoUser, StatusCount, Username, Wrapper } from "./styled";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <Wrapper>
      <Image src={githubState.user.avatar} alt="avatar" />
      <InfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <Username>
            <h3>Username: </h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </Username>
          <Username>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </Username>
        </div>

        <StatusCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
        </StatusCount>
      </InfoUser>
    </Wrapper>
  );
};

export default Profile;
