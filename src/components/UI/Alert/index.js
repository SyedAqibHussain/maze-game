import * as React from 'react';
import { AlertContext } from '../../../hocs/Provider/Alert';
import './style.css';

export default function Alert() {
  return (
    <AlertContext.Consumer>
      {({ message, isAlertOpen, hideAlert }) => {
        return isAlertOpen && (
          <div className="alert">
            <p className="alert__message">{message}</p>
            <i className="icon ion-md-close-circle-outline alert__icon" onClick={hideAlert} />
          </div>
        )
      }}
    </AlertContext.Consumer>
  )
}