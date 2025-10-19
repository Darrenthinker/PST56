import React from 'react'
import { FaMapMarkedAlt, FaBoxes, FaClipboardList } from 'react-icons/fa'
import './ExportBusiness.css'

const ExportBusiness = () => {
  const markets = [
    {
      name: '欧洲市场',
      description: '覆盖欧盟主要成员国（如德国、法国、意大利、西班牙等），依托与当地物流企业的合作，打通"中国-欧洲"空派运输通道，实现货物从国内仓库直达欧洲客户手中，支持亚马逊FBA仓库、私人地址等多种收货方式。',
      icon: <FaMapMarkedAlt />
    },
    {
      name: '英国市场',
      description: '针对英国脱欧后的物流政策变化，组建专业的英国物流服务团队，熟悉英国清关要求与流程，为货物出口英国提供定制化清关方案，保障货物顺利入境，避免因政策问题导致的运输延误。',
      icon: <FaMapMarkedAlt />
    }
  ]

  const services = [
    {
      title: '一票多件小包',
      type: '批量敏感货',
      features: [
        '适用于批量敏感货出口（如F派、香水、护肤品、食品等）',
        '将多件货物整合为一票运输',
        '空运头程+当地清关+快递派送',
        '全程自营一手掌控，提高效率节约成本',
        '全程物流信息跟踪，实时掌握货物动态'
      ],
      icon: <FaBoxes />,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: '单票单件小包',
      type: '跨境卖家代发',
      features: [
        '针对跨境卖家一件代发需求',
        '提供专属运输服务',
        '灵活安排航班',
        '缩短运输周期',
        '分摊运输风险，确保货物快速送达'
      ],
      icon: <FaClipboardList />,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  ]

  return (
    <div id="export" className="section export-section">
      <div className="container">
        <h2 className="section-title">出口业务介绍</h2>
        <p className="section-subtitle">
          针对出口市场需求，公司重点布局欧洲、英国等热门贸易地区，<br />
          聚焦敏感货运输痛点，打造了专业化的出口物流服务体系
        </p>

        <div className="markets-section">
          <h3 className="subsection-title">重点出口市场</h3>
          <div className="markets-grid">
            {markets.map((market, index) => (
              <div 
                key={market.name}
                className="market-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="market-icon">{market.icon}</div>
                <h4 className="market-name">{market.name}</h4>
                <p className="market-desc">{market.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="services-section">
          <h3 className="subsection-title">敏感货空派服务</h3>
          <p className="services-intro">
            公司在出口业务中，尤其擅长敏感货运输，提供<strong>"一票多件"</strong>与<strong>"单票单件"</strong>的小包空派双清服务
          </p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="service-card"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="service-header" style={{ background: service.gradient }}>
                  <div className="service-icon">{service.icon}</div>
                  <h4 className="service-title">{service.title}</h4>
                  <span className="service-type">{service.type}</span>
                </div>
                <div className="service-body">
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="feature-bullet">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExportBusiness

