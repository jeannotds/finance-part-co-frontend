import React from "react";
import Signup from "../../components/Signup";
import loading from "../../loading/loading";

function signup() {
  return (
    <>
      <Signup />
    </>
  );
}

export async function getServerSideProps() {
  await loading();
  return {
    props: {},
  };
}

export default signup;
