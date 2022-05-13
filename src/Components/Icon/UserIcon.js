import React from 'react'
import { Icon } from 'semantic-ui-react';
import usericon from './userIcon.css'

const UserIcon = () => (
  <div className="user-icon">
           <Icon.Group size='large'>
               <Icon size='large' name='circle outline' />
              <Icon size='small' name='user' />
            </Icon.Group>
            <Icon size='large' name='caret down' />
        </div>
)

export default UserIcon;