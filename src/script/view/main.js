import '../components/search-bar.js';
import '../components/province-list.js';

const main = () => {
    const searchBar = document.querySelector("search-bar");
    const ProvinceItemList = document.querySelector("province-list");
    const ProvinceItem = ProvinceItemList.getElementsByTagName('province-item');

    const onKeyUp = () => {
        const filter = searchBar.value.toUpperCase();
        for (let i = 0; i < ProvinceItem.length; i++) {
            const a = ProvinceItem[i].getElementsByTagName("h4")[0];
            const txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                ProvinceItem[i].style.display = "";
            } else {
                ProvinceItem[i].style.display = "none";
            }
        }
    };
    searchBar.input.addEventListener("keyup", onKeyUp);
};

export default main;