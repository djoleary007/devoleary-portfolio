import React from 'react';
import {TransitionGroup} from 'react-transition-group';

import DesignProject from './DesignProject';
import WebProject from './WebProject';
import AnimationProject from './AnimationProject';
import SingleProjectContent from './SingleProjectContent';

const ProjectWindowDirectory = (props) => {
  let contentWindow = ''
    if(props.activeProject.length > 0){
    let projectContent= '';
    if(props.openProject.acf.category === "Design"){
      projectContent = <DesignProject info={props.openProject}/>
    } else if(props.openProject.acf.category === "Development"){
      projectContent = <WebProject info={props.openProject}/>
    } else if(props.opProject.acf.category === "Animation"){
      projectContent = <AnimationProject info={props.openProject}/>
    } else{
      projectContent = '';
    }
    contentWindow = projectContent
  }
  return (
    <div>
    {contentWindow === '' ? <div/> :
      <TransitionGroup>
        <SingleProjectContent closeProject={props.closeProject}>
          {contentWindow}
        </SingleProjectContent>
      </TransitionGroup>
      }
    </div>
  );
}

export default ProjectWindowDirectory;