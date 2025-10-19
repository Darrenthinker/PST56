import React from 'react'
import { FaTruck, FaCheckCircle } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const importServices = [
    {
      title: '国际快递 DHL',
      description: '全球领先的快递物流企业，速度快、覆盖范围广，适用于高时效要求的文件、高价值货物进口运输，可实现全球主要城市快速直达香港及内地主要城市。',
      icon: '🚚'
    },
    {
      title: '国际快递 UPS',
      description: '拥有强大的全球物流网络，在北美、欧洲市场具有显著优势，提供门到门全程物流服务，对大件货物、批量货物的运输性价比高，保障货物安全、准时送达。',
      icon: '📦'
    },
    {
      title: '国际快递 FEDEX',
      description: '以高效的运输效率和优质的客户服务著称，在亚洲、欧洲、美洲之间的跨境运输中表现突出，尤其擅长精密仪器、电子产品等特殊货物的进口运输。',
      icon: '✈️'
    },
    {
      title: '国际快递 TNT',
      description: '专注于欧洲市场的物流服务，在欧洲境内的运输网络极为完善，对于从欧洲各国进口到香港，具有清关便捷、时效稳定的优势，能有效缩短运输周期。',
      icon: '🚛'
    }
  ]

  const exportServices = [
    {
      title: '欧洲市场',
      description: '覆盖欧盟主要成员国（如德国、法国、意大利、西班牙等），依托与当地物流企业的合作，打通"中国-欧洲"空派运输通道，实现货物从国内仓库直达欧洲客户手中。',
      features: [
        '支持亚马逊FBA仓库',
        '支持私人地址收货',
        '多种收货方式灵活选择'
      ],
      icon: '✈️'
    },
    {
      title: '英国市场',
      description: '针对英国脱欧后的物流政策变化，组建专业的英国物流服务团队，熟悉英国清关要求与流程，为货物出口英国提供定制化清关方案。',
      features: [
        '熟悉英国清关政策',
        '专业清关团队服务',
        '避免政策导致延误'
      ],
      icon: '🛫'
    }
  ]

  const sensitiveServices = [
    {
      title: '一票多件小包',
      subtitle: '适用于批量敏感货出口',
      description: '将多件货物整合为一票，通过空运头程运输至目的国后，由当地合作清关行处理清关及提送至快递站点提取派送。',
      features: [
        '适用于F派、香水、护肤品、食品等',
        '全程自营一手掌控',
        '提高运输效率，节约沟通成本',
        '全程提供物流信息跟踪',
        '客户可实时掌握货物动态'
      ],
      icon: '📦'
    },
    {
      title: '单票单件小包',
      subtitle: '针对跨境卖家一件代发',
      description: '提供专属运输服务，灵活安排航班，缩短运输周期，分摊运输风险，确保货物快速送达。',
      features: [
        '一件代发专属服务',
        '灵活安排航班',
        '缩短运输周期',
        '分摊运输风险',
        '确保货物快速送达'
      ],
      icon: '📮'
    }
  ]

  return (
    <div id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">服务内容</h2>
        <p className="section-subtitle">
          我们提供全方位的国际物流服务，满足您不同的运输需求，专业团队为您的货物保驾护航
        </p>

        {/* 进口业务 */}
        <div className="service-category">
          <h3 className="category-title">进口业务</h3>
          <p className="category-subtitle">
            为保障进口货物运输的高效与灵活，公司整合全球优质物流资源，与国际顶尖快递企业深度合作
          </p>
          
          <h4 className="subcategory-title">主要合作快递渠道</h4>
          <div className="import-grid">
            {importServices.map((service, index) => (
              <div 
                key={service.title}
                className="import-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon-circle">
                  <span className="service-emoji">{service.icon}</span>
                </div>
                <h4 className="service-card-title">{service.title}</h4>
                <p className="service-card-desc">{service.description}</p>
              </div>
            ))}
          </div>

          {/* 全球互转 */}
          <div className="global-transfer-section">
            <div className="global-transfer-card">
              <div className="transfer-icon">
                <span>🌍</span>
              </div>
              <div className="transfer-content">
                <h4 className="transfer-title">全球互转业务</h4>
                <p className="transfer-desc">
                  除上述四大国际快递渠道外，公司还提供<strong>全球互转物流服务</strong>，依托合作快递企业的全球网络，
                  实现不同国家和地区之间的货物中转运输。例如，可将货物从东南亚国家通过合作渠道转运至欧洲、美洲，
                  再进口至香港或内地，灵活应对复杂的国际贸易场景，为客户解决货物跨区域中转的物流难题。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 出口业务 */}
        <div className="service-category">
          <h3 className="category-title">出口业务</h3>
          <p className="category-subtitle">针对出口市场需求，公司重点布局欧洲、英国等热门贸易地区</p>
          
          <h4 className="subcategory-title">重点出口市场</h4>
          <div className="export-grid">
            {exportServices.map((service, index) => (
              <div 
                key={service.title}
                className="export-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h4 className="export-card-title">
                  <div className="service-icon-circle">
                    <span className="service-emoji">{service.icon}</span>
                  </div>
                  {service.title}
                </h4>
                <p className="export-card-desc">{service.description}</p>
                <ul className="export-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h4 className="subcategory-title" style={{ marginTop: '3rem' }}>敏感货空派服务</h4>
          <p className="category-subtitle">提供"一票多件"与"单票单件"的小包空派双清服务</p>
          <div className="sensitive-grid">
            {sensitiveServices.map((service, index) => (
              <div 
                key={service.title}
                className="sensitive-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="sensitive-header">
                  <div className="service-icon-circle">
                    <span className="service-emoji">{service.icon}</span>
                  </div>
                  <div>
                    <h4 className="sensitive-card-title">{service.title}</h4>
                    <p className="sensitive-subtitle">{service.subtitle}</p>
                  </div>
                </div>
                <p className="sensitive-card-desc">{service.description}</p>
                <ul className="sensitive-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 关税代付 */}
        <div className="customs-section">
          <div className="customs-card">
            <div className="customs-icon">
              <span>💳</span>
            </div>
            <div className="customs-content">
              <h3 className="customs-title">全球关税代付服务</h3>
              <p className="customs-desc">
                我们提供全球范围内的关税代付服务，帮助客户简化清关流程，无需亲自处理复杂的关税支付手续，让国际物流更加便捷。
              </p>
              <p className="customs-desc">
                无论您是个人还是企业，我们都能够为您提供专业的关税代付解决方案，确保物品和通关，省时省力。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

