import Head from 'next/head'
import Header from '../src/components/Header/Header.js'
import Sidebar from '../src/components/Sidebar/Sidebar.js'
import { StyledStructure } from './StyledStructure.js'
import Main from '../src/components/Main/Main.js'
import Box from '../src/components/Box/Box.js'
import ProfileInfos from '../src/components/ProfileInfos/ProfileInfos.js'
import ProfileRatings from '../src/components/ProfileRatings/ProfileRatings.js'
import FriendThumb from '../src/components/FriendThumb/FriendThumb.js'
import CommunityThumb from '../src/components/CommunityThumb/CommunityThumb.js'
import NewAction from '../src/components/NewAction/newAction.js'
import { useState } from 'react'

const githubUser = 'brunoruf'

let communities = [
  {name:'Odeio o Corinthians', image:'http://github.com/rafaballerini.png'},
  {name:'Odeio o São Paulo', image:'http://github.com/omariosouto.png'},
  {name:'Odeio o Santos', image:'http://github.com/peas.png'},
]


export default function Home() {
  
  const [myCommunities, setMyCommunities] = useState([...communities]);
  
  return (
    <div>
      <Head>
        <title>New Orkut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header userImage={`http://www.github.com/${githubUser}.png`} />
      <StyledStructure>
            <Sidebar />
            <Main>
                <div style={{gridArea: 'welcomeArea'}}>
                    <Box>
                        <h3 className="hello">Hello, Bruno.</h3>
                        <div className="fortune-cookie"><h5>Daily Fortune:</h5><p>You will rock it!</p></div>
                        <div className="split-line"></div>
                        <div className="moods">
                          <div className='profile-infos'>
                            <ProfileInfos name="Scraps" amount="15" image="https://img.icons8.com/fluency/344/mailbox-closed-flag-up.png"/>
                            <ProfileInfos name="Photos" amount="15" image="https://img.icons8.com/fluency/344/image.png"/>
                            <ProfileInfos name="Videos" amount="15" image="https://img.icons8.com/fluency/344/movie.png"/>
                            <ProfileInfos name="Fans" amount="15" image="https://img.icons8.com/fluency/344/popular-man.png"/>
                          </div>
                          <div className='profile-ratings'>
                            <ProfileRatings name="Trusty" amount="15" image="https://img.icons8.com/fluency/344/star.png" />
                            <ProfileRatings name="Cool" amount="15" image="https://img.icons8.com/fluency/344/cool.png"/>
                            <ProfileRatings name="Sexy" amount="15" image="https://img.icons8.com/fluency/344/like.png"/>
                            </div>
                        </div>
                    </Box>
                    <Box>
                        <NewAction />
                    </Box>
                </div>
                <div style={{gridArea: 'profileRelationsArea'}}>
                  <div style={{gridArea: 'FriendsArea'}}>
                    <Box>
                        <div className="area-title">
                            <h3>Friends</h3>
                            <a>See All</a>
                        </div>
                        <div className="friend-thumbs">
                            <FriendThumb name="João Figueiredo"/>
                            <FriendThumb name="João Figueiredo"/>
                            <FriendThumb name="João Figueiredo"/>
                            <FriendThumb name="João Figueiredo"/>
                            <FriendThumb name="João Figueiredo"/>
                            <FriendThumb name="João Figueiredo"/>
                        </div>
                    </Box>
                  </div>
                  <div style={{gridArea: 'CommunitiesArea'}}>
                    <Box>
                        <div className="area-title">
                            <h3>Communities</h3>
                            <a>See All</a>
                        </div>
                        <div className="community-thumbs">
                          {myCommunities.map((community) => (
                            <CommunityThumb name={community.name} image={community.image} key={community.name}/>
                          ))}
                            
                        </div>
                    </Box>
                  </div>
                </div>
            </Main>
        </StyledStructure>
    </div>
  )
}
