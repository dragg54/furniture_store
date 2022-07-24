import React from "react";
import { TbSofa } from "react-icons/tb";
import { LoaderContainer, LoadingContainer } from "./StyledLoading";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoaderContainer>
        <TbSofa style={{ width: "40px", height: "40px" }} />
      </LoaderContainer>
    </LoadingContainer>
  );
};

export default Loading;
