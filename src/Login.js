import * as React from "react";
import { withRouter } from 'react-router-dom';

class LoginInternal extends React.Component {
    state = {
        user: "",
        pass: "",
        error: null
    }
    onChange = (name, value) => {
        this.setState({
            [name]: value,
            error: null
        });
    }
    onSubmit = () => {
        if (this.state.user === "demo" && this.state.pass === "demo") {
            this.props.history.push('/dashboard');
        } else {
            this.setState({
                error: "Usuario invalido"
            });
        }
    }
    render() {
        const {
            user,
            pass,
            error
        } = this.state;
        return (<div className="container">
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Usuario</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control">
                            <input type="text" value={user} onChange={(e) => this.onChange("user", e.target.value)} className="input is-static" placeholder="Usuario" />
                        </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Password</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control">
                            <input type="text" value={pass} onChange={(e) => this.onChange("pass", e.target.value)} className="input is-static" placeholder="Password" />
                        </p>
                    </div>
                </div>
            </div>
            {error ? (<div className="notification is-danger">{error}</div>) : null}
            <div className="buttons is-right">
                <button className="button is-link" onClick={this.onSubmit}>Ingresar</button>
            </div>
        </div>);
    }
}

export const Login = withRouter(LoginInternal);