class CountryItem extends HTMLElement {

    set country(country) {
        this._country = country;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="py-3 border-bottom mt-4">
                <div class="row font-weight-bold">
                    <h4 class="col-7 font-weight-bold mr-auto text-primary">${this._country.attributes.Provinsi}</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-4 border-right">
                        <p class="mb-0 font-weight-bold">Confirmed</p>
                        <p class="mb-0">${this._country.attributes.Kasus_Posi}</p>
                    </div>
                    <div class="col-4 border-right">
                        <p class="mb-0 font-weight-bold">Recovered</p>
                        <p class="mb-0 text-success">${this._country.attributes.Kasus_Semb}</p>
                    </div>
                    <div class="col-4">
                        <p class="mb-0 font-weight-bold">Death</p>
                        <p class="mb-0 text-danger">${this._country.attributes.Kasus_Meni}</p>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define("country-item", CountryItem);