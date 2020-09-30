import '../components/search-bar.js';
import '../components/country-list.js';

const main = () => {
    const searchBar = document.querySelector("search-bar");
    const CountryItemList = document.querySelector("country-list");
    const CountryItem = CountryItemList.getElementsByTagName('country-item');

    const onKeyUp = () => {
        const filter = searchBar.value.toUpperCase();
        for (let i = 0; i < CountryItem.length; i++) {
            const a = CountryItem[i].getElementsByTagName("h4")[0];
            const txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                CountryItem[i].style.display = "";
            } else {
                CountryItem[i].style.display = "none";
            }
        }
    };
    searchBar.input.addEventListener("keyup", onKeyUp);
};

export default main;