import "./RecipeGallery.css";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeGallery({
  itemList,
  onSelect,
  onRecipeSave,
  isLoggedIn,
  onRegister,
}) {
  return (
    <div className="gallery" id="cardSection">
      <h2 className="gallery__caption">Search results:</h2>

      <div className="gallery__gallery">
        {itemList.map((item) => {
          return (
            <RecipeCard
              item={item}
              key={item.id}
              onSelect={onSelect}
              onSave={onRecipeSave}
              isLoggedIn={isLoggedIn}
              onRegister={onRegister}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecipeGallery;
