
export const reducer = (state, action)=>{
    switch(action.type){
      case "REMOVE_MOVIE":
        return{
          ...state,
          movies:[...state.movies?.filter(eachMovie=>eachMovie.id !== action.id)]
        }
      default:
        return state
    }
  }