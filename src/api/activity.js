import { fetchApi } from './_root';

export const getActivity = (data) =>
    fetchApi({
        url: '/activity-groups',
        method: 'GET',
        data,
        params: data?.params
    });

export const getIdActivity = (id) =>
    fetchApi({
        url: `/activity-groups/${id}`,
        method: 'GET'
    });

export const postActivity = (data) =>
    fetchApi({
        url: `/activity-groups`,
        method: 'POST',
        data
    });

export const editActivity = (data, id) =>
    fetchApi({
        url: `/activity-groups/${id}`,
        method: 'POST',
        data
    });

export const deleteActivity = (id) =>
    fetchApi({
        url: `/activity-groups/${id}`,
        method: 'DELETE'
    });

