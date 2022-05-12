import { createStore } from "redux";
import rootReducer from "../reducers";

// Aqui estamos passando pra nossa store o rootReducer, que é a combinação de nossos dois reducers. Vimos que poderíamos combinar isso diretamente dentro da função abaixo, mas separar é sempre uma boa ideia (a segmentação é uma grande vantagem e um grande peso do Redux...)
const store = createStore(rootReducer);

export default store;