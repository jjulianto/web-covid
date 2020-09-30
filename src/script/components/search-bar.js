class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    get input() {
        return this.querySelector("#searchElement");
    }

    render() {
        this.innerHTML = `
        <style>
            .search-container {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 5px;
                display: flex;
                position: sticky;
                margin-top: 10px;
                background-color: #fff;
                
            }
            
            .search-container>input {
                width: 100%;
                padding: 16px;
                border: 0;
                border-bottom: 1px solid rgb(4, 121, 255);
                font-weight: bold;
                font-family: 'Poppins', sans-serif;
            }
            
            .search-container>input:focus {
                outline: 0;
                border-bottom: 2px solid rgb(4, 121, 255);
            }
            
            .search-container>input:focus::placeholder {
                font-weight: bold;
            }
            
            .search-container>input::placeholder {
                color: rgb(4, 121, 255);
                font-weight: normal;
            }
            
            @media screen and (max-width: 990px) {
                .search-container {
                    flex-direction: column;
                    position: static;
                }
                .search-container>input {
                    width: 100%;
                    margin-bottom: 12px;
                }
            }
        </style>
        <p class="text-center">Untuk melihat data statistik COVID-19 sebuah provinsi di Indonesia. Carilah dengan nama provinsi nya di kotak pencarian.</p>
        <div id="search-container" class="search-container" data-aos="fade-up">
            <input placeholder="Search Province..." id="searchElement" type="search">
        </div>`;
    }
}

customElements.define("search-bar", SearchBar);