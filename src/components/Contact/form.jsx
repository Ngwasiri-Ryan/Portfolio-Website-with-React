import React from 'react'

function form() {
  return (
    <div>
       <div className='form'>
          <div className='heading'>
            Send Message
          </div>
          <div className='input'>
          <input type='text' placeholder='Full Name'></input>
          </div>
          <div className='input'>
          <input type='text' placeholder='Your Mail Address'></input>
          </div>
          <div className='input'>
          <input type='textarea' placeholder='Write your Message'></input>
          </div>

          <input type='submit' name='Submit' value='Send Email' />
          
        </div>
    </div>
  )
}

export default form
