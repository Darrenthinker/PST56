import React from 'react'
import { FaPlaneArrival, FaPlaneDeparture, FaCheck } from 'react-icons/fa'
import './CoreBusiness.css'

const CoreBusiness = () => {
  const businesses = [
    {
      title: '进口业务',
      position: '专注全球优质货物进口运输',
      description: '打通国际到香港、内地的高效物流通道',
      advantages: [
        '渠道丰富多样',
        '清关专业高效',
        '时效稳定可靠',
        '全程跟踪服务'
      ],
      icon: <FaPlaneArrival />,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: '出口业务',
      position: '聚焦欧洲、英国等重点市场',
      description: '提供敏感货专项运输服务',
      advantages: [
        '敏感货运输经验丰富',
        '线路优化高效',
        '全程透明跟踪',
        '清关流程完善'
      ],
      icon: <FaPlaneDeparture />,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ]

  return (
    <div id="business" className="section business-section">
      <div className="container">
        <h2 className="section-title">核心业务板块</h2>
        <p className="section-subtitle">
          百宸达国际货运以客户需求为导向，构建了两大自营核心业务板块，<br />
          覆盖进出口全链路物流服务，为不同行业、不同规模的企业提供定制化物流服务
        </p>

        <div className="business-grid">
          {businesses.map((business, index) => (
            <div 
              key={business.title}
              className="business-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="business-header" style={{ background: business.gradient }}>
                <div className="business-icon">
                  {business.icon}
                </div>
                <h3 className="business-title">{business.title}</h3>
                <p className="business-position">{business.position}</p>
              </div>

              <div className="business-body">
                <p className="business-desc">{business.description}</p>
                
                <div className="business-advantages">
                  <h4>核心优势</h4>
                  <ul>
                    {business.advantages.map((advantage, idx) => (
                      <li key={idx}>
                        <FaCheck className="check-icon" />
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="business-flow">
          <div className="flow-arrow">
            <span>双向物流闭环</span>
            <div className="arrow-line"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoreBusiness

