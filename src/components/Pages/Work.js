import './Work.css';
import { Icon } from '@iconify/react';
export default function Work() {
    return (
      <div>
        <h1>Work</h1>
        <div className="projects">
            <div className="small-projects">
            <div id="group-project2" tabindex="0" className="project">
                <div className="img__description">
                <a className="" aria-label="Full Stack Application - Tech Blog" href="https://fast-woodland-63027.herokuapp.com/"><h3>Alley 26 Cocktail Reference</h3></a>
                <a href="https://github.com/polizoto/Prost_4.0" title="GitHub" rel="noreferrer" target="_blank">
                <Icon className="icon" icon="akar-icons:github-outline-fill" height="40" /></a>
                </div>
            </div>
            <div id="techscoop" tabindex="0" className="project">
                <div className="img__description">
                <a className="" aria-label="Full Stack Application - Tech Blog" href="https://immense-badlands-14812.herokuapp.com/"><h3>Tech Development Scoop</h3></a>
                <a id="icon" href="https://github.com/polizoto/tech-development-scoop" title="GitHub" rel="noreferrer" target="_blank">
                <Icon className="icon"  icon="akar-icons:github-outline-fill" height="40" /></a>
                </div>
            </div>
            <div id="bash_script" tabindex="0" className="project">
                <div className="img__description">
                <a className="" aria-label="Full Stack Application - Tech Blog" href="https://www.youtube.com/watch?v=ophpILKTVNI"><h3>DOCX-HTML Bash Script</h3></a>
                <a id="icon" href="https://github.com/polizoto/DOCX-HTML" title="GitHub" rel="noreferrer" target="_blank">
                <Icon className="icon"  icon="akar-icons:github-outline-fill" height="40" /></a>
                </div>
            </div>
            <div id="manager-express" tabindex="0" className="project">
                <div className="img__description">
                <a className="" aria-label="Full Stack Application - Tech Blog" href="https://www.dropbox.com/s/pqkkrct2wip16op/Employeemanagerexpress_captioned.mp4?dl=0"><h3>Employee Manager Express</h3></a>
                <a href="https://github.com/polizoto/employee-manager-express" title="GitHub" rel="noreferrer" target="_blank">
                <Icon className="icon"  icon="akar-icons:github-outline-fill" height="40" /></a>
                </div>
            </div>
            <div id="cash-flow" tabindex="0" className="project">
                <div className="img__description">
                <a className="" aria-label="Full Stack Application - Tech Blog" href="https://stark-bastion-02307.herokuapp.com/"><h3>Cash Flow Analyzer</h3></a>
                <a id="icon" href="https://github.com/polizoto/cash_flow_analyzer" title="GitHub" rel="noreferrer" target="_blank">
                <Icon className="icon" icon="akar-icons:github-outline-fill" height="40" /></a>
                </div>
            </div>
            <div id="author" tabindex="0" className="project">
                <div className="img__description">
                <a className="" aria-label="Full Stack Application - Tech Blog" href="https://polizoto.github.io/find-an-author/"><h3>Find An Author!</h3></a>
                <a id="icon" href="https://github.com/polizoto/find-an-author" title="GitHub" rel="noreferrer" target="_blank">
                <Icon className="icon" icon="akar-icons:github-outline-fill" height="40" /></a>
                </div>
            </div>
            </div>
        </div>  
      </div>
    );
  }
  