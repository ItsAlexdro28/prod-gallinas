import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { chickensReducer } from "../reducers/chickenReducer";
import { findAll, remove, save, update } from "../services/chickenService";
import { Chicken } from "../services/chickenService";

const initialChickens: Chicken[] = [];

const initialChickenForm: Chicken = {
  id: 0,
  nombre: '',
  fechaNacimiento: '',
  estado: '',
  grupo: ''
};

export const useChickens = () => {
  const [chickens, dispatch] = useReducer(chickensReducer, initialChickens);
  const [chickenSelected, setChickenSelected] = useState<Chicken>(initialChickenForm);
  const [visibleForm, setVisibleForm] = useState(false);
  const navigate = useNavigate();

  const getChickens = async () => {
    const result = await findAll();
    dispatch({
      type: 'loadingChickens',
      payload: result || [],
    });
  };

  const handlerAddChicken = async (chicken: Chicken) => {
    let response;

    if (chicken.id === 0) {
      response = await save(chicken);
    } else {
      response = await update(chicken);
    }

    if (response) {
      dispatch({
        type: chicken.id === 0 ? 'addChicken' : 'updateChicken',
        payload: response,
      });

      Swal.fire(
        chicken.id === 0 ? 'Chicken Registered' : 'Chicken Updated',
        chicken.id === 0 ? 'The chicken has been registered successfully.' : 'The chicken has been updated.',
        'success'
      );

      handlerCloseForm();
      navigate('/chickens');
    }
  };

  const handlerRemoveChicken = (id: number) => {
    Swal.fire({
      title: 'Are you sure you want to delete this chicken?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        remove(id);
        dispatch({ type: 'removeChicken', payload: id });
        Swal.fire('Deleted!', 'The chicken has been deleted.', 'success');
      }
    });
  };

  const handlerChickenSelectedForm = (chicken: Chicken) => {
    setVisibleForm(true);
    setChickenSelected({ ...chicken });
  };

  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setChickenSelected(initialChickenForm);
  };

  return {
    chickens,
    chickenSelected,
    initialChickenForm,
    visibleForm,
    handlerAddChicken,
    handlerRemoveChicken,
    handlerChickenSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    getChickens,
  };
};
