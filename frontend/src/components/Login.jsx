import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const [formLogin, setFormLogin] = useState({
        dni:"",
        password:""
    })

    const navigate = useNavigate()

    const loginForm = async (e) => {
        e.preventDefaul()
        let {dni, password} = formLogin
        try {
            const respuesta = await fetch('http://localhost:4000/', {
                method: "POST",
                body: JSON.stringify({dni, password}),
                headers: {'Content-Type': 'application/json'}
            })
    
            const data = await respuesta.json()
            

            if(data.lenght !== 0) {
                console.log(data[0])
                
            }
            navigate("/panel")
        }catch(err) {
            console.error(err)
        }
      
    }
    return (
        <div className="container d-flex justify-content-center">
            <form  id="formLogin" onSubmit= {loginForm} action="">
                <fieldset><legend className="text-center mt-5">
                  <h4>Libreta Virtual</h4>
                  </legend>    
                  
        <div className="form-group">
          <label htmlFor="dni" className="form-label mt-3 me-3">
            DNI <i className="fa-solid fa-address-card mx-1"></i>
            </label>
        <input type="text" onChange={(e) => setFormLogin({...formLogin, dni: e.target.value})} value= {formLogin.dni}className="form-control" id="dniLogin" name = "dniLogin" placeholder=" dni" style={{width:'500px'}}/>
      </div>

      <div className="form-group">
          <label htmlFor="pass" className="form-label mt-3 me-3">
            Contraseña <i className="fa-solid fa-key mx-1"></i>
          </label>
          <input type="password" onChange={(e) => setFormLogin({...formLogin, password: e.target.value})} value= {formLogin.password} className="form-control" id="passwordSignIn" name="password" placeholder=" contraseña" style={{width:'500px'}}/>
      </div><br />
<div className="d-flex justify-content-center">
    <button type="submit" className="btn btn-primary">Iniciar Sesión <i className="fa-solid fa-paper-plane mx-1"></i></button>
    <Link to="/registro">
    <button type="submit" className="btn btn-primary mx-5">Registrarme <i className="fa-solid fa-user-check mx-1"></i>
    </button>
    </Link>
</div>
  </fieldset>
</form>
        </div>
    )
}

export default Login;