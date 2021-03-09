import React from 'react'
import axios from 'axios'

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }
    componentDidMount() {
        axios.get('https://api.github.com/users/samplesn08/followers')
            .then(res => {
                console.log(res.data)
                this.setState({followers: res.data})
            })
    }
    render() {
        return (
            <div className='card'>
                <h3>Followers</h3>
                <div className='followers'>
                    {this.state.followers.map(follower => 
                    <div className='follower' key={follower.id}>
                        <img src={follower.avatar_url} alt='user profile avatar'></img>
                        <div className='followerName'> Username: {follower.login} </div>
                    </div>
                    )}
                </div>
            </div>
            
        )
    }
}

export default Followers;