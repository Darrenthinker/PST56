import React from 'react'
import { FaGlobeAmericas, FaShieldAlt, FaClock, FaUsers } from 'react-icons/fa'
import './CompanyHistory.css'

const CompanyHistory = () => {
  const features = [
    { icon: <FaGlobeAmericas />, title: '全球覆盖', color: '#3b82f6' },
    { icon: <FaShieldAlt />, title: '安全可靠', color: '#10b981' },
    { icon: <FaClock />, title: '时效保障', color: '#f59e0b' },
    { icon: <FaUsers />, title: '专业团队', color: '#8b5cf6' }
  ]

  return (
    <div id="history" className="section history-section">
      <div className="container">
        <h2 className="section-title">企业介绍</h2>
        
        <div className="history-content">
          <div className="history-text">
            <h3 className="history-heading">专业国际物流服务商</h3>
            <p className="history-paragraph">
              深圳市百宸达国际货运代理有限公司自2015年成立以来，始终深耕物流领域，凭借专业的服务能力与敏锐的市场洞察力，逐步成长为行业内颇具竞争力的物流企业。
            </p>
            <p className="history-paragraph">
              我们以<strong>"高效、可靠、精准"</strong>为服务理念，致力于为客户提供全方位的物流解决方案，助力企业打通全球贸易通道。无论是个人物品运输还是企业大宗货物进出口，我们都能满足您的需求。
            </p>
            <div className="history-milestones">
              <div className="milestone-item">
                <strong>2015年：</strong>公司正式成立，聚焦进口物流运输业务，凭借优质的服务迅速在进口物流市场站稳脚跟。
              </div>
              <div className="milestone-item">
                <strong>2021年：</strong>战略转型，新增出口业务板块，成立飞宏科技供应链专营欧洲英国敏感货空派，实现进出口双向物流服务升级。
              </div>
            </div>
          </div>
          
          <div className="history-image">
            <div className="image-placeholder">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop" alt="公司大楼" />
            </div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h4 className="feature-title">{feature.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompanyHistory

