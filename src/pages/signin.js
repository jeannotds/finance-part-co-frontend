import React from "react";
import Signin from "../../components/Signin";
import loading from "../../loading/loading";

function signup() {
  return (
    <>
      <Signin />
    </>
  );
}

export async function getServerSideProps(){

  await loading();
  return {
      props: {}
    }
}

export default signup;
