import alley from '../../assets/alley.png'
import './Work.css';
export default function Work() {
    return (
      <div>
        <h1>Work</h1>
        <div class="projects">
            <div id="aim" class="large-project">
                <a aria-label="Accessibility presentations" href="https://daisy.org/news-events/articles/ways-people-with-print-disabilities-read-w/"><h3>Accessible Instructional Materials</h3></a>
            </div>
            <div class="small-project">
            <div id="accessibility" class="project">
                <a aria-label="Full Stack Application - Tech Blog" href="https://immense-badlands-14812.herokuapp.com/"><h3>Tech Development Scoop App</h3></a>
            </div>
            <div id="bash" class="project">
                <a aria-label="Bash Script projects" href="https://github.com/polizoto/DOCX-HTML"><h3>Bash Scripting</h3></a>
            </div>
            <div id="java" class="project">
                <a aria-label="JavaScript examples" href="https://polizoto.github.io/find-an-author/"><h3>Find An Author - JavaScript</h3></a>
            </div>
            <div id="html" class="project">
                <a aria-label="Full-stack App - Prost" href="https://fast-woodland-63027.herokuapp.com/"><h3>Alley Twenty-Six Bar - Menu</h3></a>
            </div>
            </div>
        </div>  
      </div>
    );
  }
  