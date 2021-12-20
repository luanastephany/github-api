import React from "react";
import * as Styled from "./styled";

const Profile = () => {
  return (
    <Styled.Wrapper>
      <Styled.WrapperImage
        src="https://avatars.githubusercontent.com/u/28929274?v=4"
        alt="avatar"
      />
      <Styled.WrapperInfoUser>
        <div>
          <h1>Rocketseat</h1>
          <Styled.WrapperUsername>
            <h3>Username: </h3>
            <span>rocketseat</span>
          </Styled.WrapperUsername>
        </div>

        <Styled.WrapperStatusCount>
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
        </Styled.WrapperStatusCount>
      </Styled.WrapperInfoUser>
    </Styled.Wrapper>
  );
};

export default Profile;
