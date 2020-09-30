import './country-item.js';
import DataSource from '../data/data-source.js';

class CountryList extends HTMLElement {

    set countries(countries) {
        this._countries = countries;
        this.render();
    }

    connectedCallback() {
        DataSource.country()
            .then(data => {
                this.countries = data;
            })
            .catch(error => {
                console.log(error);
            })
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2> ${message} </h2>`
    }

    render() {
        this.innerHTML = "";
        this._countries.forEach(country => {
            const countryItemElement = document.createElement("country-item");
            countryItemElement.country = country;
            this.appendChild(countryItemElement);
        })
    }
}

customElements.define("country-list", CountryList);