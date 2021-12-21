import React from "react";
import { Image, InfoUser, StatusCount, Username, Wrapper } from "./styled";

const Profile = () => {
  return (
    <Wrapper>
      <Image
        src="https://avatars.githubusercontent.com/u/70078964?v=4"
        alt="avatar"
      />
      <InfoUser>
        <div>
          <h1>Luana Stephany</h1>
          <Username>
            <h3>Username: </h3>
            <a
              href="https://github.com/luanastephany"
              target="_blank"
              rel="noreferrer"
            >
              luanastephany
            </a>
          </Username>
        </div>

        <StatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>

          <div>
            <h4>Starred</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>5</span>
          </div>
        </StatusCount>
      </InfoUser>
    </Wrapper>
  );
};

export default Profile;