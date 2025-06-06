import { Chicken } from "../services/chickenService";

export type ChickenAction =
  | { type: "addChicken"; payload: Chicken }
  | { type: "removeChicken"; payload: number } // id
  | { type: "updateChicken"; payload: Chicken }
  | { type: "loadingChickens"; payload: Chicken[] };

export const chickensReducer = (state: Chicken[] = [], action: ChickenAction): Chicken[] => {
  switch (action.type) {
    case "addChicken":
      return [
        ...state,
        {
          ...action.payload,
        },
      ];

    case "removeChicken":
      return state.filter((chicken) => chicken.id !== action.payload);

    case "updateChicken":
      return state.map((chicken) =>
        chicken.id === action.payload.id ? { ...action.payload } : chicken
      );

    case "loadingChickens":
      return [...action.payload];

    default:
      return state;
  }
};
