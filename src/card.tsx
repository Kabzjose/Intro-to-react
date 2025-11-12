import profilePic from "./assets/Gemini_Generated_Image_6va0eo6va0eo6va0.jpeg";
function Card(){
    return(
        <div className="card">
            <img className="image-card" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Jose kabz</h2>
            <p className="text">A Software Engineer</p>
        </div>
    )
}
export default Card;