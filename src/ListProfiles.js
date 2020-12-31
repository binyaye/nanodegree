import React, { Component } from 'react';


class ListProfiles extends Component {
 
  render(){
    return(
      <ol className=''>
      {this.props.profiles.map((profile) =>(
      <li>
      <p>{profile.name}</p>
      </li>
    		)
    	)
  	}
      </ol>
    
    )
  }
}

export default ListProfiles