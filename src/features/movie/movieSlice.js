import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/helper";

const initialState={
    movies:[
        {
            id:"",
            name:"",
            movieUrl:""
        }
    ],
    loading:false
}

export const getMovies = createAsyncThunk(
    "movies",
    async()=>{
        const res = await fetch(`${BASE_URL}/api/movies?populate=*`)
        const data = await res.json()
        console.log(data.data)
        const gotMovies = data.data?.map((eachMovie)=>({
            id:eachMovie.id,
            name:eachMovie.attributes.name,
            movieUrl: BASE_URL + eachMovie.attributes.movie_thumb.data.attributes.url
        }))
        console.log(gotMovies)
        return gotMovies;
    }
)

export const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getMovies.pending, (state)=>{
            state.loading = true
        })
        .addCase(getMovies.fulfilled, (state, action)=>{
            state.loading = false;
            state.movies = action.payload;
        })
    }
})

export default movieSlice.reducer