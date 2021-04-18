class ProvinceItem extends HTMLElement {

    set province(province) {
        this._province = province;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="py-3 border-bottom mt-4">
                <div class="row font-weight-bold">
                    <h4 class="col-7 font-weight-bold mr-auto text-primary">${this._province.provinsi}</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-4 border-right">
                        <p class="mb-0 font-weight-bold">Confirmed</p>
                        <p class="mb-0">${this._province.kasusPosi}</p>
                    </div>
                    <div class="col-4 border-right">
                        <p class="mb-0 font-weight-bold">Recovered</p>
                        <p class="mb-0 text-success">${this._province.kasusSemb}</p>
                    </div>
                    <div class="col-4">
                        <p class="mb-0 font-weight-bold">Death</p>
                        <p class="mb-0 text-danger">${this._province.kasusMeni}</p>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define("province-item", ProvinceItem);