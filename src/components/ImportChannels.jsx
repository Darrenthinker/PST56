import React from 'react'
import { FaShippingFast, FaGlobeAmericas } from 'react-icons/fa'
import './ImportChannels.css'

const ImportChannels = () => {
  const channels = [
    {
      name: 'DHL',
      description: '全球领先的快递物流企业，具有速度快、覆盖范围广的优势，适用于高时效要求的文件、高价值货物进口运输，可实现全球主要城市快速直达香港及内地主要城市。',
      color: '#FFCC00',
      region: '全球'
    },
    {
      name: 'UPS',
      description: '拥有强大的全球物流网络，在北美、欧洲市场具有显著优势，提供门到门全程物流服务，对大件货物、批量货物的运输性价比高，保障货物安全、准时送达。',
      color: '#351C15',
      region: '北美/欧洲'
    },
    {
      name: 'FEDEX',
      description: '以高效的运输效率和优质的客户服务著称，在亚洲、欧洲、美洲之间的跨境运输中表现突出，尤其擅长精密仪器、电子产品等特殊货物的进口运输。',
      color: '#4D148C',
      region: '亚/欧/美'
    },
    {
      name: 'TNT',
      description: '专注于欧洲市场的物流服务，在欧洲境内的运输网络极为完善，对于从欧洲各国进口到香港，具有清关便捷、时效稳定的优势，能有效缩短运输周期。',
      color: '#FF6600',
      region: '欧洲'
    }
  ]

  return (
    <div id="import" className="section import-section">
      <div className="container">
        <h2 className="section-title">进口渠道详解</h2>
        <p className="section-subtitle">
          为保障进口货物运输的高效与灵活，公司整合全球优质物流资源，<br />
          与国际顶尖快递企业深度合作，打造了多元化的进口渠道体系
        </p>

        <div className="channels-grid">
          {channels.map((channel, index) => (
            <div 
              key={channel.name}
              className="channel-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="channel-header">
                <div 
                  className="channel-logo"
                  style={{ background: channel.color }}
                >
                  <FaShippingFast />
                </div>
                <div className="channel-info">
                  <h3 className="channel-name">{channel.name}</h3>
                  <span className="channel-region">
                    <FaGlobeAmericas /> {channel.region}
                  </span>
                </div>
              </div>
              <p className="channel-desc">{channel.description}</p>
            </div>
          ))}
        </div>

        <div className="global-transfer">
          <div className="transfer-card">
            <h3>
              <FaGlobeAmericas className="transfer-icon" />
              全球互转业务
            </h3>
            <p>
              除上述四大国际快递渠道外，公司还提供<strong>全球互转物流服务</strong>，依托合作快递企业的全球网络，
              实现不同国家和地区之间的货物中转运输。例如，可将货物从东南亚国家通过合作渠道转运至欧洲、美洲，
              再进口至香港或内地，灵活应对复杂的国际贸易场景，为客户解决货物跨区域中转的物流难题。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImportChannels

