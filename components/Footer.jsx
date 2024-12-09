// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className=" footer mt-auto py-3" >
        <div className="container text-center">
          <span>
            Copyright &copy; {new Date().getFullYear()}
          </span><br />
          <span className="text-Secondary">
            Made with ❤️ by Badal Kumar Nayak
          </span>
        </div>
      </footer>
    </div>
  )
}
