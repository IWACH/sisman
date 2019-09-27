import * as React from "react";

export class Dashboard extends React.Component {
    onClick= (code) => {
        if (window.ipcRenderer) window.ipcRenderer.send('open-excel', { code: code });
    }
    render() {
        return (<div className="container">
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-2"></div>
                <div className="tile is-8">
                    <div className="tile is-vertical">
                        <div className="tile is-parent is-vertical">
                            <article className="tile is-child notification is-primary" onClick={() => this.onClick(1)}>
                                <p className="title">Excel 1</p>
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png" />
                                </figure>
                            </article>
                            <article className="tile is-child notification is-link" onClick={() => this.onClick(2)}>
                                <p className="title">Excel 2</p>
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png" />
                                </figure>
                            </article>
                            <article className="tile is-child notification is-info" onClick={() => this.onClick(3)}>
                                <p className="title">Excel 3</p>
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png" />
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-vertical">
                        <div className="tile is-parent is-vertical">
                            <article className="tile is-child notification is-success" onClick={() => this.onClick(4)}>
                                <p className="title">Excel 4</p>
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png" />
                                </figure>
                            </article>
                            <article className="tile is-child notification is-warning" onClick={() => this.onClick(5)}>
                                <p className="title">Excel 5</p>
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png" />
                                </figure>
                            </article>
                            <article className="tile is-child notification is-danger" onClick={() => this.onClick(6)}>
                                <p className="title">Excel 6</p>
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png" />
                                </figure>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}