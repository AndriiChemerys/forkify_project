import Search from './models/Search';
import * as searchVIew from './views/searchView';

import {
    elements
} from './views/base';

// import axios from 'axios';

// async function getResults(query) {
//     const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
//     console.log(res)
// }
// getResults('pizza');

// Recipe
// const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);

import Search from './models/Search';

// Global state of the app
// - Search object
// - Curent recipe object
// - Shopping list object
// - Liked recipes

const state = {};

const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput() //TODO
    console.log(query)

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        // 4) Search for recipes
        await state.search.getResults();

        // 5) Render results on UI
        console.log(state.search.result);
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

const search = new Search('pizza');
console.log(search);

search.getResults();