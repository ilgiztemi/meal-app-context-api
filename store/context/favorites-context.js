import { createContext, useState } from "react";

export const FavoritesContext = createContext( {
  id: [],
  addFavorite: ( id ) => { },
  removeFavorite: ( id ) => { }
} );
function FavoriteContextProvider( { children } ) {
  const [ favoriteMealIds, setFavoriteMealIds ] = useState( [] );
  function addFavorite( id ) {
    setFavoriteMealIds( currentFavIds => [ ...currentFavIds, id ] );
  }
  function removeFavorite( id ) {
    setFavoriteMealIds( currentFavIds => currentFavIds.filter( mealId => mealId !== id ) );
  }
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }
  return <FavoritesContext.Provider value={value}>{ children }</FavoritesContext.Provider>;
}
export default FavoriteContextProvider;