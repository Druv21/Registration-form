import React from 'react'

const Hello = () => {
  return (
    <div>
      <form className="login">
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="Enter Team Leader Name"/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="number" className="login__input" placeholder="Enter Student Number"/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="number" className="login__input" placeholder="Enter Mobile Number"/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="Enter Section"/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="Enter Member 1 Name"/> 
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="number" className="login__input" placeholder="Enter Student Number"/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="Enter Member 2 Name"/> 
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="number" className="login__input" placeholder="Enter Student Number"/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="Enter Member 3 Name"/> 
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="number" className="login__input" placeholder="Enter Student Number"/>
                    </div>
                    <button className="button login__submit">
                        <span className="button__text">Submit</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>			
                </form>
    </div>
  )
}

export default Hello;