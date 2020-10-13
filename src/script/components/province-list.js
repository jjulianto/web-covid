import './province-item.js';
import DataSource from '../data/data-source.js';

class ProvinceList extends HTMLElement {

    set provinces(provinces) {
        this._provinces = provinces;
        this.render();
    }

    connectedCallback() {
        DataSource.province()
            .then(data => {
                this.provinces = data;
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
        this._provinces.forEach(province => {
            const provinceItemElement = document.createElement("province-item");
            provinceItemElement.province = province;
            this.appendChild(provinceItemElement);
        })
    }
}

customElements.define("province-list", ProvinceList);