import React from 'react';
import { ShoppingListItem, City } from '../types';
import { MapPin, ShoppingCart, Info } from 'lucide-react';

interface Props {
  items: ShoppingListItem[];
}

const CityBadge: React.FC<{ city: City }> = ({ city }) => {
  const colors: Record<string, string> = {
    [City.MARTLOCK]: 'bg-blue-900 text-blue-200 border-blue-700',
    [City.BRIDGEWATCH]: 'bg-orange-900 text-orange-200 border-orange-700',
    [City.LYMHURST]: 'bg-green-900 text-green-200 border-green-700',
    [City.FORT_STERLING]: 'bg-gray-100 text-gray-800 border-gray-400',
    [City.THETFORD]: 'bg-purple-900 text-purple-200 border-purple-700',
    [City.CAERLEON]: 'bg-red-900 text-red-200 border-red-700',
  };

  const style = colors[city] || 'bg-gray-700 text-gray-300 border-gray-600';

  return (
    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${style} flex items-center gap-1 w-fit`}>
      <MapPin size={8} />
      {city}
    </span>
  );
};

export const ShoppingList: React.FC<Props> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="bg-albion-panel rounded-lg shadow-lg border border-albion-border p-8 h-full flex flex-col items-center justify-center text-gray-500">
        <ShoppingCart className="w-12 h-12 mb-4 opacity-50" />
        <p>Selecione receitas para ver a lista de compras.</p>
      </div>
    );
  }

  // Sort items by City to group them visually
  const sortedItems = [...items].sort((a, b) => a.bestCity.localeCompare(b.bestCity));

  return (
    <div className="bg-albion-panel rounded-lg shadow-lg border border-albion-border p-4 h-full flex flex-col">
       <div className="mb-4">
        <h2 className="text-xl font-bold text-albion-gold flex items-center gap-2">
          2. Lista de Pedidos de Compra
        </h2>
        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
          <Info size={12} />
          As cidades sugeridas possuem maior oferta (bônus de produção local), ideal para criar "Buy Orders".
        </p>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-albion-panel z-10 shadow-sm">
            <tr>
              <th className="p-2 text-xs font-semibold text-gray-400 border-b border-albion-border uppercase">Ingrediente</th>
              <th className="p-2 text-xs font-semibold text-gray-400 border-b border-albion-border uppercase text-right">Qtd Total</th>
              <th className="p-2 text-xs font-semibold text-gray-400 border-b border-albion-border uppercase">Cidade Recomendada</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((item) => (
              <tr key={item.id} className="hover:bg-white/5 border-b border-white/5 last:border-0 group">
                <td className="p-3 text-sm text-gray-200 font-medium">{item.name}</td>
                <td className="p-3 text-sm text-albion-gold font-mono font-bold text-right">{item.totalQuantity.toLocaleString()}</td>
                <td className="p-3">
                  <CityBadge city={item.bestCity} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 pt-4 border-t border-albion-border text-center">
         <button 
          onClick={() => window.print()} 
          className="bg-albion-accent hover:bg-yellow-700 text-white text-sm font-semibold py-2 px-6 rounded border border-albion-gold shadow-md transition-all active:scale-95"
         >
           Exportar / Imprimir Lista
         </button>
      </div>
    </div>
  );
};