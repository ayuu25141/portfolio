import React from 'react'
import Navd from '../comp/Nav'
import ProfileHeader from '../comp/ProfileHeader'
import Footer from '../comp/Footer'
import Music from '../comp/Music'
import ProjectCard from '../comp/Project'
import Skills from '../comp/Skills'
import Block from '../comp/Block'
function Home() {
  return (
 <>
 
 <Navd />
 <ProfileHeader />
 <ProjectCard />
 <Skills />
 <Block />
 <Music />

 <Footer />
 
 </>
  )
}

export default Home