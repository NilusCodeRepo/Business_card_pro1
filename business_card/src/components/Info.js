import profile from '../Assets/profile.jpeg'


export default function Info(){
    return(
       <div className="info">
          <img src={profile} className="info-photo"/>
          <h2 className="card-holder-name">Nilam Bhagde</h2>
          <h4 className="card-holder-position">Frontend Developer</h4>
          <p className="website">INOVATION WEBSITE</p>

      
          <div className="btn_section">
              <button className="email_btn"><i class="fa-solid fa-envelope"></i>Email</button>
              <button className="link_btn"><i class="fa-solid fa-share-nodes"></i>Linkedin</button>
          </div>
    



         </div>

         
              

         
       
        


         

       
        
    )
}