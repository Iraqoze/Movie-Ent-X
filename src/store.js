import { proxy } from "valtio";

export const state = proxy({
    movies: [],
    user: ''
})