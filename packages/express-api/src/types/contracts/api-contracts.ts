export interface Todo {
    id: string;
    content: string;
}

export interface CreateTodoParams {
    content: string;
}

export interface CreateTodoResponse {
    id: string;
    content: string;
}

export interface GetTodo {
    id: string;
}