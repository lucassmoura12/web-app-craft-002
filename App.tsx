import React, { useState, useMemo } from 'react';
import { RECIPES } from './constants';
import { Recipe, SelectedRecipe, ShoppingListItem } from './types';
import { RecipeSelector } from './components/RecipeSelector';
import { ShoppingList } from './components/ShoppingList';
import { Hammer, RotateCcw } from 'lucide-react';

export default function App() {
  const [selectedRecipes, setSelectedRecipes] = useState<SelectedRecipe[]>([]);

  const handleAddRecipe = (recipe: Recipe) => {
    setSelectedRecipes(prev => {
      if (prev.find(r => r.id === recipe.id)) return prev;
      return [...prev, { ...recipe, craftCount: 1 }];
    });
  };

  const handleRemoveRecipe = (recipeId: string) => {
    setSelectedRecipes(prev => prev.filter(r => r.id !== recipeId));
  };

  const handleUpdateCount = (recipeId: string, delta: number) => {
    setSelectedRecipes(prev => prev.map(r => {
      if (r.id !== recipeId) return r;
      const newCount = r.craftCount + delta;
      return newCount <= 0 ? null : { ...r, craftCount: newCount };
    }).filter(Boolean) as SelectedRecipe[]);
  };

  const handleReset = () => {
    if (confirm('Tem certeza que deseja limpar todas as receitas?')) {
        setSelectedRecipes([]);
    }
  };

  // Calculation Logic
  const shoppingList = useMemo(() => {
    const list: Record<string, ShoppingListItem> = {};

    selectedRecipes.forEach(recipe => {
      recipe.ingredients.forEach(ing => {
        if (!list[ing.id]) {
          list[ing.id] = {
            id: ing.id,
            name: ing.name,
            totalQuantity: 0,
            bestCity: ing.bestCity
          };
        }
        // Quantity = Base Ingredient Quantity * Number of Crafts
        list[ing.id].totalQuantity += ing.quantity * recipe.craftCount;
      });
    });

    return Object.values(list);
  }, [selectedRecipes]);

  return (
    <div className="min-h-screen flex flex-col bg-[url('https://assets.albiononline.com/assets/images/wallpapers/2021-03-17_Call-to-Arms_2560x1440.jpg')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-6 flex flex-col h-screen max-h-screen">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-6 pb-4 border-b border-albion-border">
          <div className="flex items-center gap-3">
             <div className="bg-albion-accent p-2 rounded-lg border border-albion-gold shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                <Hammer className="text-albion-gold w-6 h-6" />
             </div>
             <div>
                <h1 className="text-2xl font-bold text-albion-gold tracking-wide uppercase drop-shadow-md">Albion Crafter</h1>
                <p className="text-xs text-gray-400">Planejador de Produção de Comidas e Poções</p>
             </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <span className="block text-xs text-gray-500 uppercase">Receitas Selecionadas</span>
              <span className="block text-lg font-bold text-white">{selectedRecipes.length}</span>
            </div>
             <button 
              onClick={handleReset}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
              title="Resetar tudo"
             >
               <RotateCcw size={20} />
             </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden min-h-0 pb-4">
          <div className="h-full min-h-0">
             <RecipeSelector 
               recipes={RECIPES} 
               selectedRecipes={selectedRecipes}
               onAdd={handleAddRecipe}
               onRemove={handleRemoveRecipe}
               onUpdateCount={handleUpdateCount}
             />
          </div>
          <div className="h-full min-h-0">
            <ShoppingList items={shoppingList} />
          </div>
        </main>
      </div>
    </div>
  );
}