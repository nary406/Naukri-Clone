import {useState} from 'react'
import {Link} from 'react-router-dom'
import {BsSearch, BsArrowRight, BsBriefcaseFill} from 'react-icons/bs'
import {FaBuilding, FaRocket, FaUserCheck, FaRegBell} from 'react-icons/fa'
import {MdTrendingUp, MdVerified} from 'react-icons/md'
import Header from '../Header'
import './index.css'

const quickFilters = [
  'Full-time',
  'Remote',
  'Internship',
  '0-2 years',
  'High-paying',
]

const skillJobs = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'TechCorp',
    logo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png',
    salary: '12-18 LPA',
    type: 'Remote',
  },
  {
    id: 2,
    role: 'UI/UX Designer',
    company: 'DesignStudio',
    logo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png',
    salary: '8-12 LPA',
    type: 'Hybrid',
  },
  {
    id: 3,
    role: 'Backend Engineer',
    company: 'DataSystems',
    logo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png',
    salary: '15-25 LPA',
    type: 'On-site',
  },
  {
    id: 4,
    role: 'Product Manager',
    company: 'Innovate',
    logo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/flipkart-img.png',
    salary: '20-30 LPA',
    type: 'Remote',
  },
]

const topCompanies = [
  {
    id: 1,
    name: 'Google',
    jobs: 120,
    logo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png',
  },
  {
    id: 2,
    name: 'Microsoft',
    jobs: 85,
    logo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png',
  },
  {
    id: 3,
    name: 'Amazon',
    jobs: 200,
    logo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png',
  },
  {
    id: 4,
    name: 'Swiggy',
    jobs: 45,
    logo: 'https://assets.ccbp.in/frontend/react-js/jobby-app/swiggy-img.png',
  },
]

const careerTracks = [
  {id: 1, title: 'UI/UX Starter Pack', jobs: 340, icon: <FaRocket />},
  {
    id: 2,
    title: 'Java Developer Roadmap',
    jobs: 520,
    icon: <BsBriefcaseFill />,
  },
  {id: 3, title: 'Data Analyst Fast Track', jobs: 180, icon: <MdTrendingUp />},
]

function Home() {
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className="main-home-container">
      <Header />
      <div className="home-scroll-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-heading">
            Find The Job That <span className="highlight">Fits Your Life</span>
          </h1>
          <p className="hero-description">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>

          <div className="search-wrapper">
            <div className="search-box">
              <BsSearch className="search-icon" />
              <input
                type="text"
                className="hero-input"
                placeholder="Search by title, skill, or company"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
              />
              <Link to={`/jobs?search=${searchInput}`}>
                <button type="button" className="hero-search-btn">
                  Search
                </button>
              </Link>
            </div>
            <div className="quick-filters">
              {quickFilters.map(filter => (
                <span key={filter} className="filter-tag">
                  {filter}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skill-Based Recommendations */}
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Based on your skills</h2>
            <Link to="/jobs" className="view-all-link">
              View all <BsArrowRight />
            </Link>
          </div>
          <div className="horizontal-scroll">
            {skillJobs.map(job => (
              <div key={job.id} className="job-card-mini">
                <div className="job-card-header">
                  <img src={job.logo} alt={job.company} className="mini-logo" />
                  <div>
                    <h3 className="mini-role">{job.role}</h3>
                    <p className="mini-company">{job.company}</p>
                  </div>
                </div>
                <div className="job-card-footer">
                  <span className="mini-salary">{job.salary}</span>
                  <span className="mini-type">{job.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Grid: Resume Score & Job Alerts */}
        <div className="dashboard-grid">
          {/* Mini Resume Score */}
          <div className="dashboard-card resume-card">
            <div className="card-header">
              <FaUserCheck className="card-icon" />
              <h3>Resume Strength</h3>
            </div>
            <div className="score-circle">
              <span className="score-value">68%</span>
            </div>
            <p className="missing-info">
              Missing: Projects, Keywords, Work Summary
            </p>
            <button type="button" className="action-btn">
              Improve Resume
            </button>
          </div>

          {/* Job Alerts */}
          <div className="dashboard-card alert-card">
            <div className="card-header">
              <FaRegBell className="card-icon" />
              <h3>Job Alerts</h3>
            </div>
            <p className="alert-text">
              Get notified when new jobs match your profile.
            </p>
            <div className="alert-input-group">
              <input
                type="text"
                placeholder="Enter job role"
                className="alert-input"
              />
              <button type="button" className="alert-btn">
                Set Alert
              </button>
            </div>
          </div>
        </div>

        {/* Top Companies Hiring */}
        <div className="section-container">
          <h2 className="section-title">Top Companies Hiring</h2>
          <div className="companies-grid">
            {topCompanies.map(company => (
              <div key={company.id} className="company-card">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="company-logo-lg"
                />
                <h3 className="company-name">{company.name}</h3>
                <p className="job-count">{company.jobs} New Jobs</p>
                <Link to="/jobs" className="view-jobs-btn">
                  View Jobs
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Personalized Career Tracks */}
        <div className="section-container">
          <h2 className="section-title">Personalized Career Tracks</h2>
          <div className="tracks-grid">
            {careerTracks.map(track => (
              <div key={track.id} className="track-card">
                <div className="track-icon">{track.icon}</div>
                <div className="track-info">
                  <h3 className="track-title">{track.title}</h3>
                  <p className="track-jobs">{track.jobs} Jobs Available</p>
                </div>
                <BsArrowRight className="track-arrow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
