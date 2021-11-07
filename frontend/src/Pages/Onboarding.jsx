// from https://github.com/srdjan/react-multistep

import NavBar from "./Navbar";
import Multistep from 'react-multistep';

import '../Styles/Form.css'
import '../Styles/Onboarding.css'

const stepOne = <div className="form multistep-form">
                     <div className="form-header">
                        <h2>Account setup</h2>
                    </div>
                    <div className="form-field">
                        <label className="form-label" for="username">Username</label>
                        <input class="form-input" type="text" id="username" name="username" placeholder="jappleseed@yahoo.com" />
                    </div>
                    <div className="form-field">
                        <label className="form-label" for="username">Username</label>
                        <input class="form-input" type="text" id="username" name="username" placeholder="jappleseed@yahoo.com" />
                    </div>
                    <div className="form-field">
                        <label className="form-label" for="username">Username</label>
                        <input class="form-input" type="text" id="username" name="username" placeholder="jappleseed@yahoo.com" />
                    </div>
                </div>
            
            
const stepTwo = <div className="form multistep-form">
                    <div className="form-header">
                        <h2>Fill profile</h2>
                    </div>
                </div>

const stepThree = <div className="form multistep-form">
                    <div className="form-header">
                        <h2>Choose preferences</h2>
                    </div>
                </div>
                
const stepFour = <div className="form multistep-form">
                    <div className="form-header">
                    <h2>Review profile</h2>
                </div>
                    <div className="content-center">
                        <a href="./home" className="form-button multistep-form-finish">Start exploring</a> 
                    </div>
                </div>

const steps = [
    {name: 'StepOne', component: stepOne},
    {name: 'StepTwo', component: stepTwo},
    {name: 'StepThree', component: stepThree},
    {name: 'StepFour', component: stepFour}
];

const OnboardingPage = () => {
    return(
        <>
            {/* <NavBar isLoggedIn={true} /> */}

            <section className="onboarding-section">
                <div className="container">

                    {/* <Form> */}
                    <Multistep showNavigation={true} steps={steps}/>
                    
                    {/* </Form> */}
                </div>
            </section>
        </>
    )
}

export default OnboardingPage;