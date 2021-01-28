import React, { Component } from "react";
import "./Reportes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { db, storage } from "../Firebase";
import {Pie} from 'react-chartjs-2';




class Reportes extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.location.state);
        this.configurarGrafica = this.configurarGrafica.bind(this);
        
        this.state ={
            startDate: null,
            endDate: null,
            minDate: undefined,
            maxDate: undefined,
            isOutsideRange: () => false,
            ListOrders: [],
            address: "",
            cartItems: [],
            email: "",
            name: "",
            total: "",
            bandera: true,
            colores: [],
            direcciones:[],
            totales:[],
            data: [],
            opciones: [],
            
            
        }
        
    }

    
    async getOrders() {
    let list = [];
    const response = await db
        .collection("Order")
        .get();
    response.forEach((document) => {
        let id = document.id;
        let address = document.data().address;
        let cartItems = document.data().cartItems;
        let email = document.data().email;
        let name = document.data().name;
        let total = document.data().total;
        let obj = { id, address, email, name, total, cartItems };
        list.push(obj);
    });
    this.setState({ ListOrders: list });
    var direcciones=[], totales=[];
    this.state.ListOrders.map((elemento)=>{
        direcciones.push(elemento.address);
        totales.push(elemento.total);
    });
    this.setState({direcciones: direcciones, totales: totales});
    console.log(this.state.direcciones);
    console.log(this.state.totales);
    }


    generarCaracter(){
        var caracter = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
        var numero = (Math.random()*15).toFixed(0);
        return caracter[numero];
    }

    colorHEX(){
        var color = "";
        for(var i=0; i<6; i++){
            color = color + this.generarCaracter();
        }
        return "#" + color;
    }

    generarColores(){
        var colores = [];
        for(var i=0; i<this.state.ListOrders.length; i++){
            colores.push(this.colorHEX());
        }
        this.setState({colores: colores});
        console.log(this.state.colores);
    }

    configurarGrafica(){
        const data={
            labels: this.state.direcciones,
            datasets:[{
                data: this.state.totales,
                backgroundColor: this.state.colores
            }]
        };
        const opciones={
            responsive: true,
            maintainAspectRatio: false
        }
        this.setState({data:data, opciones: opciones});
    }


    async componentDidMount() {
        await this.getOrders();
        await this.generarColores();
        
      }


    alertStartDate = () => {
        alert(this.state.startDate);
    }
    alertEndDate = () => {
        alert(this.state.endDate);
    }


  render() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container">
                    <h1 className="navbar-brand">
                        Reportes
                    </h1>
                </div>
            </nav>
            <div > 
                <p>
                Seleccione la fecha de inicio y la fecha final, para ver de forma gráfica el reporte de las órdenes. 
                </p>
            </div>

            <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                minDate={this.state.minDate}
                isOutsideRange={this.state.isOutsideRange}
                />
            <br/>
            <br/>
            <button onClick={this.configurarGrafica}>Ver gráfico</button>
            <button onClick={this.alertEndDate}>Ver reporte completo</button>
            <div >
                <Pie data={this.state.data} opciones={this.state.opciones}/>
            </div>
            <ul className="list-group m-3">
                {this.state.ListOrders.map((Order) => (
                    <li className="list-group-item" key={Order.id}>
                    <p className="font-weight-bold">
                        <span>Dirección: </span>
                        {Order.address}
                    </p>
                    <p className="font-weight-bold">
                        <span>Total: </span>
                        {Order.total}
                    </p>

                    </li>
                ))}
             </ul>

        </div>
        
    );
  }
};


  export default Reportes;