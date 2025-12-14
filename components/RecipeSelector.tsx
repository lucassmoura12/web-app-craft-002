import React from 'react';
import { Recipe, SelectedRecipe } from '../types';
import { Plus, Minus, Search } from 'lucide-react';

interface Props {
  recipes: Recipe[];
  selectedRecipes: SelectedRecipe[];
  onAdd: (recipe: Recipe) => void;
  onRemove: (recipeId: string) => void;
  onUpdateCount: (recipeId: string, delta: number) => void;
}

export const RecipeSelector: React.FC<Props> = ({ recipes, selectedRecipes, onAdd, onRemove, onUpdateCount }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterType, setFilterType] = React.useState<'All' | 'Food' | 'Potion'>('All');

  const filteredRecipes = recipes.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || 
                        (filterType === 'Food' && r.type === 'Comida') || 
                        (filterType === 'Potion' && r.type === 'Poção');
    return matchesSearch && matchesType;
  });

  const getSelectedCount = (id: string) => {
    const found = selectedRecipes.find(sr => sr.id === id);
    return found ? found.craftCount : 0;
  };

  return (
    <div className="bg-albion-panel rounded-lg shadow-lg border border-albion-border p-4 h-full flex flex-col">
      <h2 className="text-xl font-bold text-albion-gold mb-4 flex items-center gap-2">
        1. Escolher Receitas
      </h2>
      
      {/* Search & Filter */}
      <div className="space-y-3 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          <input 
            type="text"
            placeholder="Buscar receita..."
            className="w-full bg-albion-dark border border-albion-border rounded pl-9 pr-2 py-2 text-sm focus:outline-none focus:border-albion-gold text-albion-text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {['All', 'Food', 'Potion'].map((type) => (
             <button
             key={type}
             onClick={() => setFilterType(type as any)}
             className={`flex-1 text-xs py-1 px-2 rounded border ${
               filterType === type 
               ? 'bg-albion-accent border-albion-gold text-white' 
               : 'bg-albion-dark border-albion-border text-gray-400 hover:text-white'
             }`}
           >
             {type === 'All' ? 'Tudo' : type === 'Food' ? 'Comidas' : 'Poções'}
           </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
        {filteredRecipes.map(recipe => {
          const count = getSelectedCount(recipe.id);
          return (
            <div key={recipe.id} className={`p-3 rounded border transition-colors ${count > 0 ? 'bg-yellow-900/20 border-albion-gold' : 'bg-albion-dark/50 border-albion-border hover:border-gray-500'}`}>
              <div className="flex items-start gap-3">
                <img src={recipe.imageUrl} alt={recipe.name} className="w-12 h-12 object-contain bg-black/40 rounded" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-semibold text-gray-200 leading-tight">{recipe.name}</h3>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 bg-black/40 px-1 rounded">{recipe.tier}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{recipe.type} • Produz {recipe.yields}x</p>
                  
                  <div className="mt-3 flex items-center justify-between bg-black/20 rounded p-1">
                    <span className="text-xs text-albion-gold ml-1">
                      {count > 0 ? `${count} crafts (${count * recipe.yields} itens)` : '0 crafts'}
                    </span>
                    <div className="flex items-center gap-1">
                      {count > 0 && (
                        <button 
                          onClick={() => onUpdateCount(recipe.id, -1)}
                          className="w-6 h-6 flex items-center justify-center rounded bg-red-900/50 hover:bg-red-700 text-white border border-red-800"
                        >
                          <Minus size={12} />
                        </button>
                      )}
                      <button 
                         onClick={() => count === 0 ? onAdd(recipe) : onUpdateCount(recipe.id, 1)}
                         className="w-6 h-6 flex items-center justify-center rounded bg-green-900/50 hover:bg-green-700 text-white border border-green-800"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {filteredRecipes.length === 0 && (
          <div className="text-center text-gray-500 py-8 text-sm">Nenhuma receita encontrada.</div>
        )}
      </div>
    </div>
  );
};