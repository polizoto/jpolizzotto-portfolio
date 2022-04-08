import React, { Component } from 'react';
import resume from '../../assets/polizzotto-resume.pdf'

class DownloadLink extends Component {
  render() {
      return (
          <a className="resume" href={this.props.src} download>{this.props.children}</a>
      )
  }
}

export default class Resume extends Component {

  render() {
  return (
  <div>
  <h1>Resume</h1>
  <DownloadLink src={resume}><span className="resume-title">Download Resume as a PDF</span></DownloadLink>
  <h2 id="profile">PROFILE</h2>
  <p>Highly qualified <strong>Access Technology Professional</strong> with
  17 years of post-secondary teaching experience. Known for leadership
  skills, clear communication, and wide breadth of technology
  knowledge.</p>
  <h2 id="experience">EXPERIENCE</h2>
  <h3 id="accessibility-technologist">Accessibility Technologist</h3>
  <p><em>Wake Technical Community College, Raleigh NC</em> July 2021 -
  Present</p>
  <ul>
  <li>Deliver professional development courses on
  accessibility</li>
  <li>Review academic content for accessibility</li>
  </ul>
  <h3 id="alternative-media-supervisor">Alternative Media Supervisor</h3>
  <p><em>University of California (UC) Berkeley, Berkeley CA</em> July
  2018 – July 2021</p>
  <ul>
  <li>Supervise eight full-time alternative media specialists</li>
  <li>Oversee the production of alternative formats (braille, audio,
  large-print, E-Text) for over 100 qualifying students each
  semester</li>
  <li>Liaise with faculty and staff regarding ADA obligations and
  standards</li>
  <li>Develop and maintain accessibility standards and best practices
  in the production of alternative formats (HTML, EPUB, PDF, Large Print,
  Tactile, MP3, MS Word, braille).</li>
  <li>Maintain and update Alternative Media website</li>
  <li>Train students how to use assistive technologies (Kurzweil 3000,
  JAWS, ZoomText, NVDA, EPUB Reading Systems)</li>
  </ul>
  <h3 id="access-technology-specialist-instructor">Access Technology
  Specialist Instructor </h3>
  <p><em>High Tech Center Training Unit (HTCTU), Cupertino CA</em> March
  2016 – June 2018</p>
  <ul>
  <li>Develop all−day trainings on assistive technology and alternate
  media at the HTCTU for staff in the 114 Disability Services departments
  of the California Community Colleges:</li>
  <li>Write manuals and guides outlining the best practices of how to
  create alternate media and train students with disabilities on assistive
  technology</li>
  <li>Outline basic computer specifications needed for alt media or AT
  workstations</li>
  <li>Train California Community Chancellor’s Office employees on
  assistive technology</li>
  <li>Respond to queries and issues from colleagues in the field via
  the HTCTU listservs and by phone</li>
  <li>Assist Community College faculty with how to create accessible
  documents</li>
  <li>Report on emerging trends and technologies to the HTCTU Advisory
  Board</li>
  <li>Evaluate websites, documents, and applications for adherence to
  accessibility standards (WCAG 2.0 AA) by using a combination of
  automatic checkers and assistive technology</li>
  <li>Attend and present at national conferences on disability and
  access technology</li>
  <li>Provide insights on Higher Ed market to assistive technology
  vendors, such as Kurzweil Education, Text Help, Sonocent, Humanware,
  Orcam, MatchWare</li>
  </ul>
  <h3
  id="high-tech-center-access-specialist-learning-skills-associate-professor">High
  Tech Center Access Specialist, Learning Skills Associate Professor </h3>
  <p><em>Taft College, Taft CA</em> August 2012- March 2016</p>
  <ul>
  <li><blockquote>
  <p>Responsible for alternate media production and assistive technology
  training for 300 students</p>
  </blockquote></li>
  <li><blockquote>
  <p>Identify preferences and needs for alternate and assistive technology
  for individuals with disabilities, using student documentation, staff
  conferences, and intake appointments</p>
  </blockquote></li>
  <li><blockquote>
  <p>Built and maintained alternate media database</p>
  </blockquote></li>
  <li><blockquote>
  <p>Tailor individual and group sessions on Dragon Naturally Speaking
  speech recognition, LiveScribe pens, Kurzweil 3000, JAWS, ZoomText
  Magnification, and other assistive technologies</p>
  </blockquote></li>
  <li><blockquote>
  <p>Oversee installation and configuration of accessible technology
  across campus</p>
  </blockquote></li>
  <li><blockquote>
  <p>Manage team of accommodation specialists who will train students on
  assistive technology</p>
  </blockquote></li>
  <li><blockquote>
  <p>Train team on how to produce DAISY, e-Text, tactiles, large print,
  accessible PDFs, EPUB</p>
  </blockquote></li>
  <li><blockquote>
  <p>Address needs and concerns of faculty regarding disability law,
  universal design, and accommodations for students with disabilities</p>
  </blockquote></li>
  <li><blockquote>
  <p>Design and maintain High Tech Center website as a technology resource
  for faculty and students</p>
  </blockquote></li>
  <li><blockquote>
  <p>Research emerging technologies and develop strategies for
  implementation on campus</p>
  </blockquote></li>
  <li><blockquote>
  <p>Produce tutorials, newsletters, curriculum, and presentation on
  access technologies for campus</p>
  </blockquote></li>
  <li><blockquote>
  <p>Hire and schedule CART services and ASL interpreters for Deaf
  population at college</p>
  </blockquote></li>
  <li><blockquote>
  <p>Develop and deliver curriculum for students preparing for High School
  Equivalency exam</p>
  </blockquote></li>
  </ul>
  <h3 id="esl-teaching">ESL Teaching</h3>
  <p>ESL Associate Professor</p>
  <p><em>Taft College, Taft CA</em> January 2011- August 2012</p>
  <ul>
  <li>Recorded and edited informational video about ESL program for
  recruitment purposes</li>
  </ul>
  <p><strong>ESL Instructor</strong></p>
  <p><em>Foothill College, Los Altos Hills, CA</em> March 2008-December
  2010</p>
  <ul>
  <li>Developed and delivered curriculum for advanced ESL learners in
  Silicon Valley</li>
  </ul>
  <p><strong>ESL Instructor</strong></p>
  <p><em>Evergreen Valley College, San Jose CA</em> Sep. 2007-December
  2010</p>
  <ul>
  <li>Created engaging, technology-based pronunciation exercises for
  Vietnamese ESL students</li>
  </ul>
  <p><strong>ESL Instructor</strong></p>
  <p><em>Cañada College, Redwood City CA</em> Sep. 2005- December 2010</p>
  <ul>
  <li>Designed and delivered intensive ESL classes for urban Redwood
  City communities</li>
  </ul>
  <p><strong>ESL Instructor</strong></p>
  <p><em>Gavilan College, Gilroy CA</em> June 2005-December 2010</p>
  <ul>
  <li>Devised and implemented learning styles test for ESL
  learners</li>
  </ul>
  <p><strong>Academic English Instructor</strong></p>
  <p><em>San Jose State University San Jose, CA</em> September 2005-May
  2005</p>
  <ul>
  <li>Prepared academic English lessons for incoming freshmen and
  trained academic English tutors</li>
  </ul>
  <p><strong>ESL Instructor</strong></p>
  <p><em>Metropolitan Adult Education, Campbell CA</em> September
  2000-August 2004</p>
  <ul>
  <li>Designed Vocational ESL and EL Civics curriculum for over a dozen
  different language groups</li>
  </ul>
  <h2 id="education">EDUCATION</h2>
  <p><strong>Master of Arts (Teaching English to Speakers of Other
  Languages)</strong></p>
  <p><em>San Jose State University, San Jose CA -</em> May 2004</p>
  <p><strong>Bachelor of Arts (History)</strong></p>
  <p><em>University of California, Santa Cruz CA -</em> June 2000</p>
  <p><em>Università degli studi di Padova, Italy—</em>Education Abroad
  Program - June 1998- June 1999</p>
  <h2 id="certification">CERTIFICATION</h2>
  <p><em>UNC Chapel Hill Coding Bootcamp –</em> November 2021 – April 2022</p>
  <h2 id="awards">AWARDS </h2>
  <ul>
  <li>SPOT Award – UC Berkeley (2022)</li>
  <li>CAPED Vice President of CIGs Award (October 2015)</li>
  <li>Taft College Celebration of Success Award (May 2015)</li>
  </ul>
  <h2 id="presentations">PRESENTATIONS</h2>
  <p>"STEM Materials Remediation”, a presentation to the North Carolina
  Accessibility Bridge Group, 2022</p>
  <p>"Tools for Automating the Creation of MP3s" <em>Accessing Higher
  Ground Conference 2021</em>, (virtual)</p>
  <p>"Turning Math in HTML" <em>Accessing Higher Ground Conference
  2021</em>, (virtual)</p>
  <p>"Training Program on Tools for Making Digital and Web STEM Content
  Accessible", Raised Lines Foundation (Delhi), 2021</p>
  <p>"Accessible Learning Materials", World Blindness Summit, 2021</p>
  <p>"Creating and Reading Accessible Math", <em>DAISY Webinar,</em>
  2021</p>
  <p>"Ways People with Print Disabilities Read", <em>DAISY Webinar,</em>
  2021</p>
  <p>"Turning Math into HTML", a presentation to the North Carolina Higher
  Education Digital Accessibility Group, 2021</p>
  <p>"Do More with WordToEPUB", <em>DAISY Webinar,</em> 2020</p>
  <p>"WordToEPUB Extended Tutorial", <em>DAISY Webinar,</em> 2020</p>
  <p>"Create EPUB publications from Word with a simple tool anyone can
  use", <em>DAISY Webinar,</em> 2020 "Writing and reading accessible math
  in Word, HTML and EPUB" <em>Accessing Higher Ground Conference
  2020</em>, (virtual)</p>
  <p>"Creating accessible OER and other materials by leveraging advanced
  features of Word and WordToEPUB" <em>Accessing Higher Ground Conference
  2020</em>, (virtual)</p>
  <p>"Accessible HTML – Why It’s a Good Format for your Students and How
  to Create It!" <em>Accessing Higher Ground Conference 2020</em>,
  (virtual)</p>
  <p>"Transitioning Your Campus to EPUB3" <em>Accessing Higher Ground
  Conference 2020</em>, (virtual)</p>
  <p>"Reading Systems Faceoff – How to access EPUB reading systems and how
  you can know which are the best" <em>Accessing Higher Ground Conference
  2020</em>, (virtual)</p>
  <p>"Getting to Grips with Creating and Editing EPUB" <em>Accessing
  Higher Ground Conference 2019</em>, Westminster CO</p>
  <p>"Inside EPUB", <em>Accessing Higher Ground Conference 2019</em>,
  Westminster CO</p>
  <p>" EPUB Face Off – Publishers Getting it Right or Wrong",
  <em>Accessing Higher Ground Conference 2019</em>, Westminster CO</p>
  <p>"EPUB Reading Systems for Students with Learning Disabilities",
  <em>Accessing Higher Ground Conference 2019</em>, Westminster CO</p>
  <p>"Adding accessibility enhancements to EPUB files", <em>ATN webinar
  series 2019</em></p>
  <p>"Reading EPUB with Dyslexia and Learning Disabilities" <em>ATN
  webinar series 2019</em></p>
  <p>“Markdown-An Easy-to-Write format for Alternate Media and Basic
  Notetaking”. <em>CSUN 2018 Conference</em>, San Diego CA.</p>
  <p>“Introducing Readiance: ‘Read-Aloud’ Books for Titles in the Public
  Domain”. <em>CSUN 2018 Conference</em>, San Diego CA.</p>
  <p>“Reaching the Higher Ed Market”. K<em>urzweil National Sales
  Meeting</em>, Tucson AZ.</p>
  <p>“Tools for Automating the Captioning of Video”. <em>Accessing Higher
  Ground Conference</em>, Westminster CO “EPUB: Where We Are and Where We
  Are Going”. <em>CAPED 2017 Pre− Conference</em>, Huntington Beach CA
  “Using MathType to Make Textbooks Accessible”. <em>CAPED 2017
  Conference</em>, Huntington Beach CA.</p>
  <p>“DIY Captioning Tools for Faculty”. <em>2017 Post− Secondary Training
  Institute</em>, Boston MA</p>
  <p>“Tools for Automating the Captioning of Video”. <em>IAAP
  Webinar,</em> 2017</p>
  <p>“A Captioning Workflow”. Text A/V Event. New York, New York. 2017</p>
  <p>“Introducing Aeneas: A Fast and Multi− Dimensional Tool”. <em>CSUN
  2017 Conference</em>, San Diego CA.</p>
  <p>“Built− In Accessibility Tools for macOS and iOS”. <em>CSUN 2017
  Conference</em>, San Diego CA.</p>
  <p>“Technology for Reading, Note− Taking, and Writing”. Crafton Hills
  College, Yucaipa CA 2016</p>
  <p>“We Have an App for That!” <em>2016 Assistive Technology Fair</em> at
  University of Nevada at Reno.</p>
  <p>“MathML: An Overview of Creation and Usage”, <em>CAPED 2016
  Conference</em>, Monterey CA</p>
  <p>“Equal Access to Electronic &amp; Information Technology (E&amp;IT)”,
  CAPED 2016 Preconference, Monterey CA “Technology for Reading, Note−
  Taking, and Writing”. <em>Shasta College AT Workshops</em>, Redding CA
  2016</p>
  <p>“Note− taking Accommodations: How Technology Can Help”. <em>2016 PTI
  Conference</em>, Philadelphia PA “Closed Captioned Files Made Easier”.
  <em>2016 CSUN Conference,</em> San Diego CA</p>
  <p>“We Have an App for That!” Keynote at <em>Opening the College Door
  2015 Conference</em> in Porterville CA.</p>
  <p>“Overview of Cloud Services, E-readers, and Notetaking Solutions”.
  CAPED 2015. “Assistive Technology and the English Classroom”.
  B<em>uilding Bridges 2013 Conference</em>.</p>
  <h2 id="committee-involvement">COMMITTEE INVOLVEMENT </h2>
  <p><strong>UC Berkeley</strong></p>
  <ul>
  <li>Ally in Canvas Pilot (2018-2019)</li>
  </ul>
  <p><strong>Taft College</strong></p>
  <ul>
  <li>Taft Disabilities Partnership Team (2013-2016)</li>
  <li>Public Information Committee (2013-2016)</li>
  <li>Academic Senate (2011-2016)</li>
  <li>Academic Development Committee (2011-2013)</li>
  <li>Professional Development Committee (2011-2013)</li>
  </ul>
  <p><strong>Gavilan College</strong></p>
  <ul>
  <li>Learning Council (2009-2011)</li>
  </ul>
  <p><strong>PROFESSIONAL AFFILIATIONS</strong></p>
  <ul>
  <li>
  <p>EPUB for Higher Education− DAISY Consortium (2016− Present)</p>
  </li>
  <li>
  <p>EPUB Reading Systems Group− DAISY Consortium (2016− Present)</p>
  </li>
  <li>
  <p>Access Technology Higher Education Network (ATHEN) (2015-Present)</p>
  </li>
  <li>
  <p>Association of Higher Education And Disability (AHEAD)
  (2014-Present)</p>
  </li>
  <li>
  <p>California Post-secondary Education and Disability (CAPED)
  (2013-2018)</p>
  
  </li>
  <li>Co-Chair of Access Technology Interest Group (2014-2016)</li>
  <li>
  <p>Teach Access Member (2016− 2018)</p>
  </li>
  <li>
  <p>High Tech Center Training Unit Advisory Board Member (2013-2018)</p>
  </li>
  <li>
  <p>Kurzweil Education Customer Advisory Board Member (2015-2018)</p>
  </li>
  </ul>
  <h2 id="technical-skills">TECHNICAL SKILLS</h2>
  <ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>React</li>
  <li>Express</li>
  <li>REST API Testing and Development</li>
  <li>GitHub</li>
  <li>MySQL, Sequelize</li>
  <li>MongoDB</li>
  <li>Bash</li>
  <li>Microsoft Office Suite</li>
  <li>Adobe Creative Cloud Suite</li>
  <li>Optical Character Recognition Tools</li>
  </ul>
  </div>

  );
  }
}
  