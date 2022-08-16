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

const githubUser = 'brunoruf'

export default function Home() {
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
                        <div className="fortune-cookie"><h5>Daily Fortune:</h5><p>Você vai chegar lá.</p></div>
                        <div className="split-line"></div>
                        <div className="moods">
                            <ProfileInfos name="Scraps" amount="15" image="https://img.icons8.com/fluency/344/mailbox-closed-flag-up.png"/>
                            <ProfileInfos name="Photos" amount="15" image="https://img.icons8.com/fluency/344/image.png"/>
                            <ProfileInfos name="Videos" amount="15" image="https://img.icons8.com/fluency/344/movie.png"/>
                            <ProfileInfos name="Fans" amount="15" image="https://img.icons8.com/fluency/344/popular-man.png"/>
                            <ProfileRatings name="Trusty" amount="15" image="https://img.icons8.com/fluency/344/star.png" />
                            <ProfileRatings name="Cool" amount="15" image="https://img.icons8.com/fluency/344/cool.png"/>
                            <ProfileRatings name="Sexy" amount="15" image="https://img.icons8.com/fluency/344/like.png"/>
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
                            <CommunityThumb name="Eu odeio acordar cedo"/>
                            <CommunityThumb name="João Figueiredo"/>
                            <CommunityThumb name="João Figueiredo"/>
                            <CommunityThumb name="João Figueiredo"/>
                        </div>
                    </Box>
                  </div>
                </div>
            </Main>
        </StyledStructure>
    </div>
  )
}
