import React, { Component } from 'react';
import "./signup1.css";
class SignUp1 extends Component {
    state = { 
            firstname :"",
            lastname : "",
            emailAddress :"",
            country:"INDIA",
            password:"",
            address:"",
            pincode:"",
            mobileNumber :"",
            confirmpassword : "",
            confirmpasswordError:"",
            flag:true
            }

            handleError = () =>{
                console.log("error handled called");
                if(this.state.confirmpassword !== this.state.password) 
                {
                    let confirmpassworderror;
                    confirmpassworderror = "Both passwords Should Match";
                    this.setState({confirmpasswordError:confirmpassworderror})
                    this.setState({flag:false})


                }
                else { 
                    let confirmpassworderror;
                    confirmpassworderror = " ";
                    this.setState({confirmpasswordError: confirmpassworderror})
                    this.setState({flag:true})
                }



            }

            handlephonenumber = (event) =>{
                this.setState({phonenumber : event.target.value});
                this.handleError();
                 }

            handleconfirmpassword = (event) =>{
                this.setState({confirmpassword: event.target.value});
                }

                handleSubmit1 = (event) =>{
                    event.preventDefault();
                    this.handleError();
                    console.log(this.state.flag)

                    // const isValid = this.validate();
                    if(this.state.flag)
                    {

                    const register = 
                    {

                        firstName : this.state.firstname,
                        lastName : this.state.lastname,
                        mobileNumber :this.state.phonenumber ,
                        emailAddress : this.state.mail,
                        password : this.state.password,
                        address : this.state.address,
                        zipCode : this.state.pincode,
                        country : this.state.country
                    }; 
                    // console.log(this.state)
                    const registerReq = JSON.stringify(register)
                    console.log(registerReq)
                    fetch('https://on-cloud-web-service.azurewebsites.net/web/register',{
                        method : 'POST',
                        headers : 
                        {
                            'Accept' : 'application/json',
                            'Content-Type' : 'application/json'
                        },
                        body:registerReq
                    }).then(res => {
        
                      console.log(res)
        
                      const statusCode = res.status;
                      if(statusCode === 200)
                       {
                        
                          alert('Successfully Registered')
                          window.location.reload(false);
                       }
                      else {
                      const data = res.json();
                      return Promise.all([statusCode, data]);
                      }
                    }
                    ).then(data => {
                     if  (data==null)
                     {
                      console.log(data)
        
                     } else {
                      console.log(data)
        
                      if(data[0] === 400){
        
                        alert(data[1].details)
                      } else {
                        alert(data)
                      }
                }
            }
            );
                       
                      }
                }

    render() { 
        return ( 
            <div>
                <div className="signup1container">
                <form  onSubmit = {(event)=>this.handleSubmit1(event)} >
                     <div className="signup1form">


                    <div className="signupheading"><h1>Registration</h1></div>
                        <table><thead></thead>
                        <tbody>
                            <tr> 

                                <td><label className="lablestyle">First Name  </label></td>
                                <td><input type="text" className="signupin" 
                                placeholder="Enter the First name"
                                pattern="^[a-zA-Z]+$" 
                                value={this.state.firstname}
                                onChange = {(event) => this.setState({firstname : event.target.value})}
                                title="Spaces are not allowed" 
                                required /></td>
                            </tr>
                            <tr>
                                <td><label className="lablestyle">Last Name  </label></td>
                                <td><input type="text" className="signupin" 
                                placeholder="Enter the Last name" 
                                value={this.state.lastname}
                                onChange = {(event) => this.setState({lastname : event.target.value})}
                                pattern="^[a-zA-Z]+$" 
                                title="Spaces are not allowed" required /></td>
                            </tr>
                            <tr>
                                <td><label className="lablestyle">Address  </label></td>
                                <td><textarea name="" id="" cols="10" rows="3" 
                                placeholder="Enter the Address"
                                value={this.state.address}
                                onChange = {(event) => this.setState({address : event.target.value})}
                                 required></textarea></td>
                            </tr>

                            <tr>
                              <td><label className="pincodelable lablestyle">Pincode  </label></td>
                              <td><input type="text" className="picode signupin" 
                               placeholder="Enter the Zip code"
                               pattern="[0-9]{6}"
                               value={this.state.pincode}
                               onChange = {(event) => this.setState({pincode : event.target.value})}
                               title="Enter Valid Pin Code" required /></td>
                            </tr>

                            <tr>
                             <td><label className="lablestyle">Country  </label></td>
                             <td> <select className="country" 
                             value={this.state.country}
                             onChange = {(event) => this.setState({country : event.target.value})}
                                 >
                             <option value="INDIA">India</option>
                             <option value="USA">USA</option>
                             <option value="CANADA">Canada</option>
                             <option value="AUSTRALIA">Australia</option>


                          </select>
                          </td>
                            </tr>

                           <tr>
                             <td><label className="lablestyle">Email  </label></td>

                             <td ><input type="email" className="signupin" 
                             placeholder="abc@example.com"
                              value={this.state.mail || ''}
                             onChange = {(event) => this.setState({mail : event.target.value})}
                              title="invalid email" required/></td>
                           </tr>

                           <tr>
                            <td><label className="lablestyle">Password  </label></td>

                            <td><input type="password" className="signupin" 
                            placeholder="Enter the Password" 
                            pattern="^[0-9]{9,25}$" 
                            value={this.state.password}
                                onChange = {(event) => this.setState({password : event.target.value})}
                            title="only numbers and length should be (9-25)" required /></td>
                         </tr>

                          <tr>
                           <td><label className="lablestyle">Confirm Password </label></td>

                           <td><input type="password" className="signupin" 
                           placeholder="Enter the Password"
                            pattern="^[0-9]{9,25}$" 
                            value={this.state.confirmpassword}
                            onChange = {this.handleconfirmpassword}


                            title="Both passwords Should Match" required/></td>
                         </tr>
                         <tr>
                             <td></td>
                             <td className="handlingerror">{this.state.confirmpasswordError}</td>
                         </tr>

                         <tr>
                           <td><label className="lablestyle">Phone Number  </label></td>

                           <td><select name="phonenumber"  className="signuppn" >
                               <option defaultValue="+91">+91</option>
                               <option value="+1">+1</option>
                               <option value="+61">+61</option>
                               <option value="+1">+1</option>
                               </select> {""} {""} 
                           <input type="number" className="phoneinput signupin"
                            placeholder="Enter the mobile number"
                            value={this.state.phonenumber || ''}
                                onChange = {this.handlephonenumber}
                              pattern="^[0-9]{10}$"
                             title="Enter valid Mobile number" required/></td>
                        </tr>
                        </tbody>
                        </table>
                        <button type="submit" >Submit</button>
                        <p className="signuppara">Already have a account ? <a href="/login">Login</a></p>
                    </div>
                    </form>
                </div>
            </div>
         );
    }
}

export default SignUp1;