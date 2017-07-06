import React from 'react'


class Contact extends React.Component {
   render() {
      return (
         <div>
          <p className="fontTItle">Welcome! You are Contact Screen.</p>
         <div className="contactform"> 
        <form>
            <label>
              Name:
              <input type="text"/>
            </label>
          <label>
              Address:
              <textarea type="text"/>
            </label>
          <label>
              Phone Number:
              <input type="number"/>
            </label>
            <input type="submit" value="Submit" />
        </form>
          </div>
         </div>
      )
   }
}

export default Contact;