import profile from '../Assets/profile.jpeg'


export default function Info(){
    return(
       <div className="info">
          <img src={profile} className="photo"/>
          <h2>NILAM BHAGDE</h2>
          <p>Frontend Developer</p>
          <p>Indo-German Collab</p>


       </div>
        
    )
}