import React from 'react'

class OhmValue extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            banda: "-",
            bandb: "-",
            bandc: "-",
            bandd: "-",
            ohms: Number,
            resistance: Number
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async getResistance() {
        const response = await fetch("https://localhost:7189/api/OhmValueCalculator", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "BandA": this.state.banda,
                "BandB": this.state.bandb,
                "BandC": this.state.bandc,
                "BandD": this.state.bandd
            })
        });
        const responseVal = await response.json();
        this.setState({
            ohms: responseVal.ohms,
            resistance: responseVal.tolerance
        });
    }

    handleChange(event) {
        if (event.target.id == "bandADropdown") {
            this.setState({ banda: event.target.value });
        }
        else if (event.target.id == "bandBDropdown") {
            this.setState({ bandb: event.target.value });
        }
        else if (event.target.id == "bandCDropdown") {
            this.setState({ bandc: event.target.value });
        }
        else if (event.target.id == "bandDDropdown") {
            this.setState({ bandd: event.target.value });
        }
    }

    handleSubmit(event) {
        if (this.state.banda == '-' || this.state.bandb == '-' || this.state.bandc == '-' || this.state.bandd == '-') {
            alert("you must select a value for each of the bands");
        }
        else {
            this.getResistance();
        }
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <div>
                    <h1>Ohm Value Calculator</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Band A:
                            <select value={this.state.banda} id="bandADropdown" onChange={this.handleChange}>
                                <option value="-">-</option>
                                <option value="black">Black</option>
                                <option value="brown">Brown</option>
                                <option value="red">Red</option>
                                <option value="orange">Orange</option>
                                <option value="yellow">Yellow</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                <option value="violet">Violet</option>
                                <option value="grey">Grey</option>
                                <option value="white">White</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Band B:
                            <select value={this.state.bandb} id="bandBDropdown" onChange={this.handleChange}>
                                <option value="-">-</option>
                                <option value="black">Black</option>
                                <option value="brown">Brown</option>
                                <option value="red">Red</option>
                                <option value="orange">Orange</option>
                                <option value="yellow">Yellow</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                <option value="violet">Violet</option>
                                <option value="grey">Grey</option>
                                <option value="white">White</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Band C:
                            <select value={this.state.bandc} id="bandCDropdown" onChange={this.handleChange}>
                                <option value="-">-</option>
                                <option value="pink">Pink</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                                <option value="black">Black</option>
                                <option value="brown">Brown</option>
                                <option value="red">Red</option>
                                <option value="orange">Orange</option>
                                <option value="yellow">Yellow</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                <option value="violet">Violet</option>
                                <option value="grey">Grey</option>
                                <option value="white">White</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Band D:
                            <select value={this.state.bandd} id="bandDDropdown" onChange={this.handleChange}>
                                <option value="">-</option>
                                <option value="none">None</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                                <option value="brown">Brown</option>
                                <option value="red">Red</option>
                                <option value="orange">Orange</option>
                                <option value="yellow">Yellow</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                <option value="violet">Violet</option>
                                <option value="grey">Grey</option>
                            </select>
                        </label>

                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>

                    </form>
                <div>
                    <p>Ohms: {this.state.ohms} </p>
                </div>
                <div>
                    <p>Tolerance: +/-{this.state.resistance}% </p>
                </div>
            </div >

        );
    }


};

export default OhmValue