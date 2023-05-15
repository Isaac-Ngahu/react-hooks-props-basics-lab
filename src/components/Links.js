import React from 'react'

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={props.githubLink}>githubLink</a>
     <a href={props.linkedinLink}>Linkedin link</a>
    </div>
  )
}

export default Links