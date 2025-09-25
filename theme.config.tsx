import React from 'react'

export default {
  logo: <span>Al Haque</span>,
  navigation: [
    { title: 'Home', path: '/' },
    { title: 'Blog', path: '/blog' },
    { title: 'Projects', path: '/Projects' }
  ],
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{new Date().getFullYear()}</time> © Al Haque
    </small>
  )
}
