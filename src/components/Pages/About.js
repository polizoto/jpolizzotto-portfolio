
import profile from '../../assets/polizzotto.jpg'

export default function About() {
    return (
      <div>
        <h1>About</h1>
        <p className="Hero">
        <img src={profile} alt="Joseph Polizzotto"/>
        </p>
        <p>
        I am an accessibility technologist with over 20 years of teaching experience.
        </p>
        <p>
        I have a passion for coding and am looking forward to opportunities to be a full-stack web developer.
        </p>
      </div>
    );
  }