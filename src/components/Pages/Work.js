import './Work.css';
import React, { Component }  from 'react';
import { Icon } from '@iconify/react';

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

      render() {
    return (
      <div>
        <h1>Work</h1>
        <div className="projects">
            <div className="small-projects">
            <div id="group-project2" tabIndex="0" className="project">
                <div className="img__description">
                <a className="app-info" aria-label="Alley 26 Bar Menu" href="https://fast-woodland-63027.herokuapp.com/"rel="noreferrer" target="_blank"><h3>Alley 26 Cocktail Reference</h3></a>
                <a className="GitHub-info" href="https://github.com/polizoto/Prost_4.0" title="GitHub" rel="noreferrer" target="_blank">
                <Icon className="icon" icon="akar-icons:github-outline-fill" height="40" /></a>
                </div>
            </div>
            <div id="book-finder" tabIndex="0" className="project">
                <div className="img__description">
                <a className="app-info" aria-label="Open Source Book Finder" href="https://limitless-plateau-46390.herokuapp.com/"rel="noreferrer" target="_blank"><h3>Open - Source Book-Finder</h3></a>
                <a className="GitHub-info" href="https://github.com/polizoto/openSource-bookFinder" title="GitHub" rel="noreferrer" target="_blank">
                <Icon className="icon"  icon="akar-icons:github-outline-fill" height="40" /></a>
                </div>
            </div>
            <div id="bash_script" tabIndex="0" className="project">
                <div className="img__description">
                <a className="app-info" aria-label="DOCX HTML Bash Script" href="https://www.youtube.com/watch?v=ophpILKTVNI"rel="noreferrer" target="_blank"><h3>DOCX-HTML Bash Script</h3></a>
                <a className="GitHub-info" href="https://github.com/polizoto/DOCX-HTML" title="GitHub" rel="noreferrer" target="_blank">
                <Icon className="icon"  icon="akar-icons:github-outline-fill" height="40" /></a>
                </div>
            </div>
            <div id="manager-express" tabIndex="0" className="project">
                <div className="img__description">
                <a className="app-info" aria-label="Employee Manager Express App" href="https://www.dropbox.com/s/pqkkrct2wip16op/Employeemanagerexpress_captioned.mp4?dl=0"rel="noreferrer" target="_blank"><h3>Employee Manager Express</h3></a>
                <a className="GitHub-info" href="https://github.com/polizoto/employee-manager-express" title="GitHub" rel="noreferrer" target="_blank">
                <Icon className="icon"  icon="akar-icons:github-outline-fill" height="40" /></a>
                </div>
            </div>
            <div id="renaissance" tabIndex="0" className="project">
                <div className="img__description">
                <a className="app-info" aria-label="Renaissance Rags" href="https://whispering-fjord-16472.herokuapp.com/"rel="noreferrer" target="_blank"><h3>Renaissance Rags</h3></a>
                <a className="GitHub-info" href="https://github.com/polizoto/renaissance-rags" title="GitHub" rel="noreferrer" target="_blank">
                <Icon className="icon" icon="akar-icons:github-outline-fill" height="40" /></a>
                </div>
            </div>
            <div id="author" tabIndex="0" className="project">
                <div className="img__description">
                <a className="app-info" aria-label="Full Stack Application - Tech Blog" href="https://polizoto.github.io/find-an-author/"rel="noreferrer" target="_blank"><h3>Find An Author!</h3></a>
                <a className="GitHub-info" href="https://github.com/polizoto/find-an-author" title="GitHub" rel="noreferrer" target="_blank">
                <Icon className="icon" icon="akar-icons:github-outline-fill" height="40" /></a>
                </div>
            </div>
            </div>
        </div>  
      </div>
      
    );
  }
}

  