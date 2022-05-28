import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import AppComponent from '../components/component'
import PortofolioCard from '../components/portofolio-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>RvPS</title>
        <meta property="og:title" content="RvPS" />
      </Helmet>
      <Navigation></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-heading-container">
              <AppComponent></AppComponent>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-text-container">
              <span className="home-text">our VISION</span>
              <h2 className="home-text01 heading2">
                <span>Roadmap</span>
              </h2>
              <span className="home-text03">
                <span>
                  6 steps of greatness in no particular order, I mean there is
                  an order but it&apos;s a lot of overlap, consider this a
                  checklist
                </span>
                <br></br>
                <span>Also ⛑️ 20% funds to Red Cross</span>
              </span>
            </div>
            <div className="home-tab-selector-cards-container">
              <PortofolioCard
                image_src="/playground_assets/33-400h.png"
                project_title="Augmented reality rock paper scissors game "
                rootClassName="portofolio-card-root-class-name"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/3451-400h.png"
                project_title="comic app "
                rootClassName="portofolio-card-root-class-name5"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/25-400h.png"
                project_title="free mint of Fukushima turtles tanks project "
                rootClassName="portofolio-card-root-class-name4"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/4-400h.png"
                project_title="Cut throat research towards upcoming projects"
                rootClassName="portofolio-card-root-class-name3"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/66-400h.png"
                project_title="Paper trading contests - real wins"
                rootClassName="portofolio-card-root-class-name2"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/27-400h.png"
                project_title="An NYSE options play that's gonna get bored apes scream out of excitement"
                rootClassName="portofolio-card-root-class-name1"
              ></PortofolioCard>
            </div>
          </div>
        </div>
        <div className="home-banner section-container">
          <div className="home-max-width2 max-content-container">
            <span className="home-text07">whY are you waiting?</span>
            <h2 className="home-text08 heading2">
              <span>only 690 to ever exist</span>
            </h2>
            <span className="home-text10">
              <span>
                Own the greatest night in television history in your metamask
                &amp; bask in greatness
              </span>
              <br></br>
              <span>
                &amp; a free mint to the next project which is a pocket tank
                revisioned into a turtle tanks game, what&apos;s to
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>think</span>
            </span>
            <a
              href="https://presale.rockvspaperscissors.live"
              target="_blank"
              rel="noreferrer noopener"
              className="home-primary button-lg button-secondary-white button"
            >
              MINT NOW, LIKE RIGHT NOW, GO GO GO
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
