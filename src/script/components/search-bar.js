class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
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
                width: 75%;
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
            
            .search-container>button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: rgb(4, 121, 255);
                color: #fff;
                font-weight: bold;
                border: 0;
                text-transform: uppercase;
                font-family: 'Poppins', sans-serif;
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
                .search-container>button {
                    width: 100%;
                }
            }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search Country" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>`;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);