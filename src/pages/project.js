import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import MainPage from '../../components/MainPage'
import ProjectItem from '../../components/ProjectItem'

function project() {
  return (
   <>
     <main className="main">
      <div className="blog__main" data-aos="fade-right">
        <h2>Service financement participatif.</h2>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem iste
          quisquam cum voluptates temporibus adipisci nisi asperiores nostrum
          quibusdam, maiores facere optio ea! Dignissimos sed impedit ducimus
          nobis architecto a.
        </div>
        <a className="signup__main" href="#">Sign Up</a>
      </div>
    </main>
    <ProjectItem />
   </>
  )
}

export default project