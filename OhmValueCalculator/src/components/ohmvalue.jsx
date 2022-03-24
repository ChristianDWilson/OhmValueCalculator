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
                                <option value="black_a">Black</option>
                                <option value="brown_a">Brown</option>
                                <option value="red_a">Red</option>
                                <option value="orange_a">Orange</option>
                                <option value="yellow_a">Yellow</option>
                                <option value="green_a">Green</option>
                                <option value="blue_a">Blue</option>
                                <option value="violet_a">Violet</option>
                                <option value="grey_a">Grey</option>
                                <option value="white_a">White</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Band B:
                            <select value={this.state.bandb} id="bandBDropdown" onChange={this.handleChange}>
                                <option value="-">-</option>
                                <option value="black_b">Black</option>
                                <option value="brown_b">Brown</option>
                                <option value="red_b">Red</option>
                                <option value="orange_b">Orange</option>
                                <option value="yellow_b">Yellow</option>
                                <option value="green_b">Green</option>
                                <option value="blue_b">Blue</option>
                                <option value="violet_b">Violet</option>
                                <option value="grey_b">Grey</option>
                                <option value="white_b">White</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Band C:
                            <select value={this.state.bandc} id="bandCDropdown" onChange={this.handleChange}>
                                <option value="-">-</option>
                                <option value="pink_c">Pink</option>
                                <option value="silver_c">Silver</option>
                                <option value="gold_c">Gold</option>
                                <option value="black_c">Black</option>
                                <option value="brown_c">Brown</option>
                                <option value="red_c">Red</option>
                                <option value="orange_c">Orange</option>
                                <option value="yellow_c">Yellow</option>
                                <option value="green_c">Green</option>
                                <option value="blue_c">Blue</option>
                                <option value="violet_c">Violet</option>
                                <option value="grey_c">Grey</option>
                                <option value="white_c">White</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Band D:
                            <select value={this.state.bandd} id="bandDDropdown" onChange={this.handleChange}>
                                <option value="">-</option>
                                <option value="none_d">None</option>
                                <option value="silver_d">Silver</option>
                                <option value="gold_d">Gold</option>
                                <option value="brown_d">Brown</option>
                                <option value="red_d">Red</option>
                                <option value="orange_d">Orange</option>
                                <option value="yellow_d">Yellow</option>
                                <option value="green_d">Green</option>
                                <option value="blue_d">Blue</option>
                                <option value="violet_d">Violet</option>
                                <option value="grey_d">Grey</option>
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