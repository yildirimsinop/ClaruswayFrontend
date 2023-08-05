//? counter type declarations
export const INC = "INC";
export const DEC = "DEC";
export const CLR = "CLR";

//! action islemlerini basitlestirmek icin fonksiyonlar yazilabilir.

export const increment = () => {
  return { type: INC };
};
export const decrement = () => ({ type: DEC });

export const clear = () => ({ type: CLR });

//? State'lerin baslangic durumlarinin belirlenmesi.

const initialState = {
  count: 10,
};

//? Pure Function (reducer)
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC: //? count: state.count+1
      return {
        count: state.count + 1,
      };

    case DEC:
      return {
        count: state.count + 1,
      };
    case CLR:
      return {
        count: 0,
      };

    default:
      return state;

    //! Reducer fonksiyonu muhakkak bir state objesi dondurmelidir. Yanlis bir tpe gelse bile state'in ilk halini dondurmelidir.
  }
};
