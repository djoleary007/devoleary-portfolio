import React from 'react';



//components
import TimelineHeader from './TimelineHeader';
import LoadingPane from '../../small-components/LoadingPane';
import TimelineContent from './TimelineContent';
import HeadShot from './HeadShot';

const AboutContent = (props) => {
  if(props.loading === true){return <LoadingPane/>}else{
    return (
      <main className="body-container">
        <div className="triangle"></div>
        <div>
          <section className="flex-container row even-spacing reverse-wrap body-section ">
            <div className="flex-container center column ">
              <TimelineHeader {...props} loadTime={props.loadTime}/>
              <div className="flex-container center column">

                  {props.timelineInfo.length > 0 &&
                  props.active.length > 0 ? <TimelineContent active={props.active[0]}/>
                    :
                      <article className="content-body_read">
                        <h2 className="text-center">#lifegoals</h2>
                        <br/>
                        <p>
                          Live intentionally
                          <span className="vertical-dash">|</span>
                          Continually add tools
                          <span className="vertical-dash">|</span>
                          Maximize experiences
                          <span className="vertical-dash">|</span>
                          Go a step farther
                          <span className="vertical-dash">|</span>
                          Make the steps count
                        </p>
                        <br/>
                        <h3>I am an essentialist,</h3>
                        <p>filling my life with next level experiences, meaningful relationships, and passionate work, whatever it may be. Life is too short to not live exceptionally.</p>
                      </article>
                }

              </div>
            </div>
              <HeadShot {...props} loadPic={props.loadPic}/>
          </section>
          <section className="body-section ">
            <hgroup className="header-offset flex-container column">
              <h2 className="text-center">my passions</h2>
              <hr className="divider-colored"/>
            </hgroup>
            <div className="flex-container center">
              <article className="flex-container column center display-box">
                <div className="inner-box flex-container center column">
                  <h3>biking:</h3>
                  <p className="content-body_read">Mountain, road, gravel, town, unicycle.
                  Riding them and fixing them up</p>
                  <br/>
                  <h3>coffee shops:</h3>
                  <p className="content-body_read">Coffee is ok, but hanging out in cool coffee shops
                  with good vibes is one of the top reasons I migrated to computer work</p>
                  <h3>community:</h3>
                  <p className="content-body_read">I get super stoked about people doing cool things to bring
                  people together in their community. My life mission is to
                  maximize my role in creating community, and using the web to extend the range infinately.</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
export default AboutContent;
