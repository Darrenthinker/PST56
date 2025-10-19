import React from 'react'
import { FaHistory, FaBriefcase, FaPlane, FaShip, FaEnvelope, FaTruck } from 'react-icons/fa'
import './TableOfContents.css'

const TableOfContents = () => {
  const contents = [
    { id: 'history', title: '企业发展历程', icon: <FaHistory />, desc: '十年深耕，专业可靠' },
    { id: 'business', title: '核心业务板块', icon: <FaBriefcase />, desc: '进出口双向服务' },
    { id: 'import', title: '进口渠道详解', icon: <FaPlane />, desc: '全球优质物流网络' },
    { id: 'export', title: '出口业务介绍', icon: <FaShip />, desc: '欧洲英国专线' },
    { id: 'contact', title: '联系与合作', icon: <FaEnvelope />, desc: '携手共创未来' }
  ]

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="toc" className="section toc-section">
      <div className="container">
        <h2 className="section-title">目录导航</h2>
        <p className="section-subtitle">了解百宸达，开启全球物流之旅</p>

        <div className="toc-grid">
          {contents.map((item, index) => (
            <div 
              key={item.id}
              className="toc-card"
              onClick={() => scrollToSection(item.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="toc-icon">
                {item.icon}
              </div>
              <h3 className="toc-title">{item.title}</h3>
              <p className="toc-desc">{item.desc}</p>
              <div className="toc-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TableOfContents

