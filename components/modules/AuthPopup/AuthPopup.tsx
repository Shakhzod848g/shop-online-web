import { useState } from 'react'
import AuthPopupLogin from './AuthPopupLogin'
import AuthPopupRegistration from './AuthPopupRegistration'

const AuthPopup = () => {
  // ^ States
  const [isAuthSwitched, setIsAuthSwitched] = useState(false)
  const [isSignInActive, setIsSignInActive] = useState(false)
  const [isSignupActive, setIsSignupActive] = useState(true)

  // & Functions
  const toggleAuth = () => {
    setIsAuthSwitched(!isAuthSwitched)
    setIsSignInActive(!isSignInActive)
    setIsSignupActive(!isSignupActive)
  }

  return (
    <div className='container auth-popup'>
      <div>
        <div className='starsec' />
        <div className='starthird' />
        <div className='starfourth' />
        <div className='starfifth' />
      </div>

      <div className={`auth-popup__card ${isAuthSwitched ? 'switched' : ''}`}>
        <div className='auth-popup__card__inner'>
          <AuthPopupRegistration
            toggleAuth={toggleAuth}
            isSideActive={isSignupActive}
          />
          <AuthPopupLogin
            toggleAuth={toggleAuth}
            isSideActive={isSignInActive}
          />
        </div>
      </div>
    </div>
  )
}

export default AuthPopup
