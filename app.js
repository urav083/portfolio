// const pokemonURL = 'https://pokeapi.co/api/v2/pokemon?generation=1';

// async function getPokemon() {
//     const myObject = await fetch(pokemonURL);
//     console.log(myObject);
//     const pokemon = await myObject.json();
//     console.log(pokemon);
// }

// getPokemon();

// const fetchPokemonByTypeAndGeneration = async(type) => {
//     const typeResponse = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
//     const typeData = await typeResponse.json();
//     console.log(typeData.pokemon);

//     const pokemonPromises = typeData.pokemon.map(async pokemon => {
//         const pokemonResponse = await fetch(pokemon.pokemon.url);
//         const pokemonData = await pokemonResponse.json();
//         console.log(pokemonData)
//         return pokemonData;
//     });

//     const pokemons = await Promise.all(pokemonPromises);
//     const filteredPokemon = pokemons.filter(pokemon => {
//         return pokemon.id <= 151;
//     });
//     return filteredPokemon;
// }

// fetchPokemonByTypeAndGeneration("fire").then(pokemon => {
//     console.log(pokemon);
// });




// ****
// create namespaced object
const pokemon = {};

// define endpoint
// filter array down to 3 types(water, fire, grass)
// https://pokeapi.co/api/v2/type/10/
pokemon.typeURLS = ['https://pokeapi.co/api/v2/type/10/', 'https://pokeapi.co/api/v2/type/11/', 'https://pokeapi.co/api/v2/type/12/'];

const fetchThreeTypes = pokemon.typeURLS.map(async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const singleArray = data.pokemon

    const singleArrayURLS = singleArray.map((data) => {
        return data.pokemon.url
    });

    const singlePokemonTypePromises = singleArrayURLS.map(async (url) => {
        const response = await fetch(url)
        const data = await response.json();

        return data
    })

    const allPokemon = await Promise.all(singlePokemonTypePromises)
    // console.log(allPokemon);
    const allPokemonFiltered = allPokemon.filter((pokemon) => {
        return pokemon.id <= 151;
    })

    console.log(allPokemonFiltered);


    // const genOne = singlePokemonTypePromises.filter((data) => {

    //     return data.id <= 151;
    // })





    // array.filter((data) => {
    //     console.log(data.pokemon.url)
    // })
    // console.log(data);
    return data
});



// Page Scrolling Animations
const scrollElements = document.querySelectorAll(".js-scroll");

// scrollElements.forEach((el) => {
//     el.style.opacity = 0.5
// })

// create function to determine when element is in view

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

// create const to add scrolled class
const addScrolled = (el) => {
    el.classList.add("scrolled");
    // el.style.opacity = 1
}
// create const to add scrolled class
const removeScrolled = (el) => {
    el.classList.remove("scrolled");
    // el.style.opacity = 1
}

// Combine to animate

const scrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el)) {
            addScrolled(el);
        } else {
            removeScrolled(el);
        }
    })
}


window.addEventListener('scroll', () => {
    scrollAnimation();
})