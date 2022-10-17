import { fetchApi } from './_root';

export const getTodo = (params) =>
    fetchApi({
        url: '/todo-items',
        method: 'GET',
        params: params
    });

export const getIdTodo = (id) =>
    fetchApi({
        url: `/todo-items/${id}`,
        method: 'GET'
    });

export const editTodo = (data, id) =>
    fetchApi({
        url: `/todo-items/${id}`,
        method: 'POST',
        data
    });

export const deleteTodo = (data, id) =>
    fetchApi({
        url: `/todo-items/${id}`,
        method: 'DELETE',
        data
    });

