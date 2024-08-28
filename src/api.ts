import axios from 'axios';
import { TodoType } from './types';

export const API_URL = 'http://localhost:8080/todos';

export const addTodo = async (todoTitle: string): Promise<TodoType> => {
    try {
        const response = await axios.post(API_URL, { title: todoTitle });
        console.log('res', response);
        return response.data;
    } catch (error) {
        console.error('Error adding todo:', error);
        throw error;
    }
};

export const fetchTodos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log('Error In Fetching Todos', error);
        throw error;
    }
}

export const deleteTodo = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`)
}