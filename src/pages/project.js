import React from 'react'
import ProjectItem from '../../components/ProjectItem'
import MainPage from '../../components/MainPage'
import loading from '../../loading/loading'

function project() {
  return (
   <>
     <MainPage />
    <ProjectItem />
   </>
  )
}

export async function getServerSideProps() {

  await loading();

  return {
    props: {},
  };

}

export default project