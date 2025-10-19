import React, { useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaWeixin, FaLink, FaLinkedin, FaYoutube, FaUser } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('感谢您的咨询！我们会尽快与您联系。')
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <FaUser />,
      label: '联系人',
      value: '王莎莎'
    },
    {
      icon: <FaPhone />,
      label: '联系电话',
      values: ['+86-13923831023']
    },
    {
      icon: <FaEnvelope />,
      label: '电子邮箱',
      values: ['wangxnig@pst.com']
    },
    {
      icon: <FaClock />,
      label: '工作时间',
      values: ['周一至周五：9:00 - 18:00', '周六：9:00 - 12:00 (节假日除外)']
    },
    {
      icon: <FaMapMarkerAlt />,
      label: '公司地址',
      value: '深圳市宝安区福永街道广深公路福永段5号美盈(福永)智汇港南面'
    }
  ]

  const socialLinks = [
    { icon: <FaWeixin />, label: '微信' },
    { icon: <FaLink />, label: '官网' },
    { icon: <FaLinkedin />, label: 'LinkedIn' },
    { icon: <FaYoutube />, label: 'YouTube' }
  ]

  const advantages = [
    '多年进出口物流经验，熟悉全球物流政策与清关流程',
    '多元化渠道体系，可灵活匹配不同货物运输需求',
    '专业服务团队，提供一对一专属物流解决方案',
    '全程物流跟踪，确保货物运输透明、可控'
  ]

  return (
    <div id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">联系与合作</h2>
        <p className="section-subtitle">
          百宸达国际货运始终秉持<strong>"客户至上、合作共赢"</strong>的理念，期待与更多企业建立长期稳定的合作关系
        </p>

        {/* 合作优势 */}
        <div className="advantages-section">
          <h3 className="advantages-title">合作优势</h3>
          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="advantage-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="advantage-icon">✓</div>
                <p>{advantage}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-layout">
          {/* 左侧：联系方式 */}
          <div className="contact-info-box">
            <h3 className="box-title">联系方式</h3>
            
            <div className="contact-list">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="contact-item-new"
                >
                  <div className="contact-icon-new">{info.icon}</div>
                  <div className="contact-text">
                    <h4 className="contact-label-new">{info.label}</h4>
                    {info.value && <p className="contact-value-new">{info.value}</p>}
                    {info.values && info.values.map((val, idx) => (
                      <p key={idx} className="contact-value-new">{val}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4 className="social-title">关注我们</h4>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <button key={index} className="social-btn" title={link.label}>
                    {link.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧：在线咨询表单 */}
          <div className="contact-form-box">
            <h3 className="box-title">在线咨询</h3>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="请输入您的姓名"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">电话</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="请输入您的联系电话"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">邮箱</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="请输入您的电子邮箱"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">咨询服务</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">请选择咨询服务类型</option>
                  <option value="进口业务">进口业务</option>
                  <option value="出口业务">出口业务</option>
                  <option value="关税代付">关税代付</option>
                  <option value="其他咨询">其他咨询</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">咨询内容</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="请详细描述您需要或疑问"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">提交咨询</button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2015-2025 深圳市百宸达国际货运代理有限公司 版权所有</p>
        <div className="footer-links">
          <span>友情链接：</span>
          <a href="https://huodaiagent.com/" target="_blank" rel="noopener noreferrer">货代导航网</a>
        </div>
      </footer>
    </div>
  )
}

export default Contact

