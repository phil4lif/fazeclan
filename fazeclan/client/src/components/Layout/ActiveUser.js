import React from 'react'
import FormModal from '../UserForm/FormModal'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Overall Page Style
const activeUserStyle = {
    color: 'white',
    border: 'white',
    borderStyle: 'solid',
    borderRadius: '20px',
    borderWidth: '2px',
    padding: '50px',
    marginTop: '30px',
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '10px'
}

const activeUserInfoStyle = {
    textAlign: 'center'
  };

// Buttons Parent Style
const buttonParentStyle = {
    marginBottom: '28px'
  };

// Temporary button Styles
const buttonStyles = {
    position: 'relative',
    width: '200px',
    margin: '0 auto',
    display: 'block',
    marginTop: '3%'
  };

// Active User's Information
 function ActiveUser() {
    return (
            
            <div className="row active-user" style={activeUserStyle}>
                <div className="col-sm-3" style={activeUserInfoStyle}>
                    <h2>YourName</h2>
                    <h3>Rank: 1000</h3>
                    <h4>***</h4>
                </div>
                <div className="col-sm-6" style={buttonParentStyle}>
                <Button variant="contained" color="primary" style={buttonStyles}>
                Github
                </Button>
                <Button variant="contained" color="primary" style={buttonStyles}>
                Git Stats
                </Button>
                <Button variant="contained" color="primary" style={buttonStyles}>
                Git Battle
                </Button>
                <FormModal />
                </div>
                <div className="col-sm-3">
                    <div className="profile-pic-holder">
                        <img src="http://lorempixel.com/200/200" alt="Placeholder Pic"/>
                    </div>
                </div>
                <br />
                
            </div>
        
    )
}
export default ActiveUser;