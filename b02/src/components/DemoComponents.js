// import { useState } from 'react'
import Input from './common/Button'

export default function DemoComponent() {

  return (
    <div className="tcl-container">
      <div className="tcl-row">
        <div className="tcl-col-4">
          <Input
            className="btn btn-primary btn-size-large"
           />
          <hr></hr>
          <Input 
            className="btn btn-primary btn-size-large"
            value="Submit"
          />
          <hr></hr>
          <Input 
            className="btn btn-primary btn-size-large"
            value="Load more"
          />
          <hr></hr>
          <Input 
          className="btn btn-category"
          />
          <hr></hr>

          <Input 
            className="btn btn-category"
            value="News"
          />
          <hr></hr>
          <Input 
            className="btn btn-default"
          />
          <hr></hr>
          <Input 
            className="btn btn-default"
            value="View more"
          />
        </div>
      </div>
    </div>
  )
}