import React, { Component } from 'react';

class Calcular extends Component {
    constructor(props) {
        super(props)
        this.presion = this.presion.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.presion}>
                    <p>Ingrese valor 1:
                    <input type="number" name="valor1" />
                    </p>
                    <p>Ingrese valor 2:
                 <input type="number" name="valor2" />
                    </p>
                    <p>
                        <input type="submit" value="Sumar" />
                    </p>
                </form>
            </div>
        );
    }
    presion(e) {
        e.preventDefault();
        const v1 = parseInt(e.target.valor1.value, 10);
        const v2 = parseInt(e.target.valor2.value, 10);
        const suma = v1 + v2;
        alert('La suma es:' + suma);
        document.write(suma)
    }
}
export default Calcular;
