import {useState} from 'react'
import './index.css'

const ShareReferral = ({referral}) => {
  const {link = '', code = ''} = referral
  const [copiedType, setCopiedType] = useState('')

  const copyText = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedType(type)

      setTimeout(() => {
        setCopiedType('')
      }, 1500)
    } catch (error) {
      setCopiedType('')
    }
  }

  return (
    <section className="share-referral-section">
      <h2 className="share-referral-heading">Share Referral</h2>

      <div className="share-referral-card">
        <div className="share-referral-row">
          <div className="share-referral-text-block">
            <p className="share-referral-label">Your Referral Link</p>
            <p className="share-referral-value">{link}</p>
          </div>
          <button
            type="button"
            className="copy-button"
            onClick={() => copyText(link, 'link')}
          >
            {copiedType === 'link' ? 'Copied' : 'Copy'}
          </button>
        </div>

        <div className="share-referral-row">
          <div className="share-referral-text-block">
            <p className="share-referral-label">Your Referral Code</p>
            <p className="share-referral-value">{code}</p>
          </div>
          <button
            type="button"
            className="copy-button"
            onClick={() => copyText(code, 'code')}
          >
            {copiedType === 'code' ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ShareReferral