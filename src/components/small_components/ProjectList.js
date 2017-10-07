import React from 'react';

const ProjectList = (props) => {
  const itemList = props.info.map(dev => {
    if(dev.acf.category === props.category){
      return (
        <li key={dev.id}>
          <figure className="project_item-container">
            <img className="img-project_preview" src={dev._embedded['wp:featuredmedia']["0"].source_url}
            alt={dev.slug}/>
            <figcaption className="project_text-container text-inverse">
              <h2>{dev.title.rendered}</h2>
              <h5>{dev.acf.description}</h5>
            </figcaption>
          </figure>
        </li>
      )
    } else{ return ''}
  })
  return (

    <div>
      <section className="">
        <h1 className="text-center">{props.category}</h1>
        <ul>
          {itemList}
        </ul>
      </section>
    </div>
  );
}

export default ProjectList;
