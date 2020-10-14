import React, { useState, useEffect,} from 'react'
import { Modal, Row, Col, Card, CardBody, Label, Input, ButtonGroup, Button}  from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import Home from '../../pages/Home'
import { connect } from 'react-redux';
import { REGISTER_USER_FAILED, CLEAR_ERROR } from '../../redux/auth/constants'
import { registerUser } from '../../redux/auth/actions';

function Register(props) {


    const [modalIsOpen, setModalIsOpen] = useState(true)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [repeatPassword,setRepeatPassword]=useState('')
    const history = useHistory();


    const handleRegister = (e) => {
        e.preventDefault();
        //! Check Passwords
        if(password !== repeatPassword){
            props.setErr("Пароль не соответствует")
            return;
        }
        props.registerUser({email, password}, history)
    }
    
    const {clearError} = props;
    useEffect(() => {
        clearError()
    }, [clearError])

    //! Back to the login page
    const previousPage = (e) => {
        history.replace('/auth/Login')
    }


    return (
        <div>
            <Home/>
            <Modal isOpen={modalIsOpen} onClosed={()=>setModalIsOpen(false)}>            
                <Row style={{height:'0vh',width:'100%'}} className="align-items-center justify-content-center">
                  <Col md={8}>
                    <Card className="shadow">
                      <CardBody>
                        <form onSubmit={handleRegister}>
                        {props.err && (
                            <h4 className="text-danger">Error: {props.err.response.data.message}</h4>
                        )}
                          <h3>Постучаловка</h3>
                          <Label className="mt-3" htmlFor="email">
                            МАЙЛЫНЫ ЖАЗ
                          </Label>

                          <Input 
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                          />
                          <Label className="mt-3" htmlFor="password">
                            ЭМИ ПАРОЛДУ
                          </Label>
                          <Input 
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                          />
                          <Label className="mt-3" htmlFor="password">
                            ДАГЫ ПАРОЛ
                          </Label>
                          <Input 
                            id="repeat_password"
                            name="repeat_password"
                            value={repeatPassword}
                            onChange={(e)=>setRepeatPassword(e.target.value)}

                          />
                          <ButtonGroup className="w-100 mt-3">
                            <Button color='primary' type="submit">БАСЧЫ</Button>
                            <Button  type="reset" onClick={previousPage}>БАСПА</Button>
                          </ButtonGroup>
                          <p className="text-center mt-3">Ты уже Постучился? {' '} <Link to="/auth/login">Тогда Заходи</Link></p>
                        </form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
            </Modal>
        </div>
    )
}


const mapStateToProps = state => {
    const { loading, err } = state.AuthReducer;
    return { loading, err }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: ({email, password}, history) => {
            dispatch(
                registerUser(
                    {email, password}, history
                )
            )
        },
        setErr: (message) => dispatch({
            type: REGISTER_USER_FAILED,
            payload: {response: {data: { message }}}
        }),
        clearError: () => dispatch({
            type: CLEAR_ERROR,
        })
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (Register)
