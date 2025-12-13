import {Component} from 'react'
import {
  BsFillPersonFill,
  BsBriefcaseFill,
  BsCodeSlash,
  BsGithub,
  BsGlobe,
} from 'react-icons/bs'
import {FaRobot, FaRegEdit} from 'react-icons/fa'
import {MdEmail, MdLocationOn} from 'react-icons/md'
import Header from '../Header'
import './index.css'

const profileData = {
  name: 'Rahul Kumar',
  role: 'Full Stack Developer',
  location: 'Bangalore, India',
  email: 'rahul.dev@example.com',
  summary:
    'Passionate developer with 3 years of experience in building scalable web applications using React, Node.js, and Python. Loves solving complex problems and contributing to open source.',
  skills: [
    'React',
    'Node.js',
    'Python',
    'TypeScript',
    'AWS',
    'Docker',
    'GraphQL',
    'MongoDB',
  ],
  projects: [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      desc: 'A comprehensive dashboard for managing products, orders, and analytics.',
      tech: ['React', 'Redux', 'Chart.js'],
    },
    {
      id: 2,
      title: 'Task Management App',
      desc: 'Real-time collaborative task manager with drag-and-drop features.',
      tech: ['Next.js', 'Firebase', 'Tailwind'],
    },
  ],
}

class Profile extends Component {
  state = {
    resumeScore: 72,
    aiSuggestions: [
      'Add more quantitative results in your work experience.',
      'Include keywords: "CI/CD", "Microservices" for better reach.',
      'Highlight your leadership in the "Task Management App" project.',
    ],
  }

  render() {
    const {resumeScore, aiSuggestions} = this.state

    return (
      <div className="profile-page-container">
        <Header />
        <div className="profile-content">
          {/* Left Sidebar */}
          <div className="profile-sidebar">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <BsFillPersonFill />
                </div>
                <h1 className="profile-name">{profileData.name}</h1>
                <p className="profile-role">{profileData.role}</p>
              </div>
              <div className="profile-details">
                <div className="detail-item">
                  <MdLocationOn className="detail-icon" />
                  <span>{profileData.location}</span>
                </div>
                <div className="detail-item">
                  <MdEmail className="detail-icon" />
                  <span>{profileData.email}</span>
                </div>
              </div>
              <div className="profile-links">
                <button type="button" className="social-link">
                  <BsGithub /> GitHub
                </button>
                <button type="button" className="social-link">
                  <BsGlobe /> Portfolio
                </button>
              </div>
            </div>

            {/* Resume Health Score */}
            <div className="resume-health-card">
              <h3 className="card-title">Resume Health</h3>
              <div className="score-ring">
                <span className="score-number">{resumeScore}%</span>
              </div>
              <p className="score-label">Good, but needs improvement</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="profile-main">
            {/* AI Suggestions */}
            <div className="ai-suggestion-box">
              <div className="ai-header">
                <FaRobot className="ai-icon" />
                <h3>AI Resume Improver</h3>
              </div>
              <ul className="suggestion-list">
                {aiSuggestions.map((suggestion, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index} className="suggestion-item">
                    {suggestion}
                  </li>
                ))}
              </ul>
              <button type="button" className="ai-action-btn">
                Auto-Fix Resume
              </button>
            </div>

            {/* About */}
            <div className="content-section">
              <div className="section-header">
                <h2>About</h2>
                <button type="button" className="edit-btn">
                  <FaRegEdit />
                </button>
              </div>
              <p className="about-text">{profileData.summary}</p>
            </div>

            {/* Skills */}
            <div className="content-section">
              <div className="section-header">
                <h2>Skills</h2>
                <button type="button" className="edit-btn">
                  <FaRegEdit />
                </button>
              </div>
              <div className="skills-grid">
                {profileData.skills.map(skill => (
                  <span key={skill} className="skill-tag">
                    <BsCodeSlash className="skill-icon" /> {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="content-section">
              <div className="section-header">
                <h2>Projects</h2>
                <button type="button" className="edit-btn">
                  <FaRegEdit />
                </button>
              </div>
              <div className="projects-grid">
                {profileData.projects.map(project => (
                  <div key={project.id} className="project-card">
                    <div className="project-icon">
                      <BsBriefcaseFill />
                    </div>
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.desc}</p>
                      <div className="tech-stack">
                        {project.tech.map(t => (
                          <span key={t} className="tech-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
