import { Package, AlertTriangle, TrendingDown, TrendingUp, Search, Filter } from 'lucide-react';
import { mockInventoryItems, mockStockMovements } from './mockData';
import { useState } from 'react';

export function PrototypeInventory() {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = mockInventoryItems.filter((item) => {
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-stock':
        return 'emerald';
      case 'low-stock':
        return 'amber';
      case 'out-of-stock':
        return 'red';
      case 'expired':
        return 'purple';
      default:
        return 'slate';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'medication':
        return 'blue';
      case 'supply':
        return 'emerald';
      case 'equipment':
        return 'purple';
      default:
        return 'slate';
    }
  };

  const getStockPercentage = (current: number, minimum: number) => {
    return Math.round((current / (minimum * 2)) * 100);
  };

  const isExpiringSoon = (expiryDate?: string) => {
    if (!expiryDate) return false;
    const daysUntilExpiry = Math.floor(
      (new Date(expiryDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    );
    return daysUntilExpiry < 90 && daysUntilExpiry > 0;
  };

  const lowStockCount = mockInventoryItems.filter((item) => item.status === 'low-stock').length;
  const outOfStockCount = mockInventoryItems.filter((item) => item.status === 'out-of-stock').length;
  const expiredCount = mockInventoryItems.filter((item) => item.status === 'expired').length;
  const totalValue = mockInventoryItems.reduce(
    (sum, item) => sum + item.currentStock * item.costPerUnit,
    0
  );

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Total Items</span>
            <Package className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-slate-900">{mockInventoryItems.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Low Stock</span>
            <AlertTriangle className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-3xl font-bold text-amber-600">{lowStockCount}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Out of Stock</span>
            <TrendingDown className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-3xl font-bold text-red-600">{outOfStockCount}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Total Value</span>
            <TrendingUp className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-3xl font-bold text-emerald-600">${totalValue.toLocaleString()}</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name or SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="pl-10 pr-8 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
            >
              <option value="all">All Categories</option>
              <option value="medication">Medications</option>
              <option value="supply">Supplies</option>
              <option value="equipment">Equipment</option>
            </select>
          </div>
        </div>
      </div>

      {/* Inventory Items */}
      <div className="space-y-3">
        {filteredItems.map((item) => {
          const statusColor = getStatusColor(item.status);
          const categoryColor = getCategoryColor(item.category);
          const stockPercentage = getStockPercentage(item.currentStock, item.minimumStock);
          const expiringSoon = isExpiringSoon(item.expiryDate);

          return (
            <div
              key={item.id}
              className={`bg-white rounded-xl border-2 ${
                item.status === 'low-stock' || item.status === 'out-of-stock'
                  ? `border-${statusColor}-300`
                  : 'border-slate-200'
              } p-5`}
            >
              {(item.status === 'low-stock' || item.status === 'out-of-stock' || expiringSoon) && (
                <div
                  className={`bg-${
                    item.status === 'out-of-stock' ? 'red' : 'amber'
                  }-100 border-l-4 border-${
                    item.status === 'out-of-stock' ? 'red' : 'amber'
                  }-600 p-2 rounded mb-3`}
                >
                  <div className="flex items-center gap-2">
                    <AlertTriangle
                      className={`w-4 h-4 text-${
                        item.status === 'out-of-stock' ? 'red' : 'amber'
                      }-600`}
                    />
                    <p
                      className={`text-xs font-bold text-${
                        item.status === 'out-of-stock' ? 'red' : 'amber'
                      }-900`}
                    >
                      {item.status === 'out-of-stock'
                        ? '🚨 OUT OF STOCK - IMMEDIATE REORDER REQUIRED'
                        : item.status === 'low-stock'
                        ? '⚠️ LOW STOCK - REORDER RECOMMENDED'
                        : expiringSoon
                        ? '⏰ EXPIRING SOON - REVIEW INVENTORY'
                        : ''}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4">
                {/* Item Icon */}
                <div className={`w-16 h-16 bg-${categoryColor}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Package className={`w-8 h-8 text-${categoryColor}-600`} />
                </div>

                {/* Item Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                    <span
                      className={`px-2 py-1 bg-${categoryColor}-100 text-${categoryColor}-900 text-xs font-bold rounded`}
                    >
                      {item.category.toUpperCase()}
                    </span>
                    <span
                      className={`px-2 py-1 bg-${statusColor}-100 text-${statusColor}-900 text-xs font-bold rounded`}
                    >
                      {item.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3 text-sm">
                    <div className="bg-slate-50 rounded p-2">
                      <p className="text-xs text-slate-500 mb-1">SKU</p>
                      <p className="font-mono font-bold text-slate-900">{item.sku}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-2">
                      <p className="text-xs text-slate-500 mb-1">Current Stock</p>
                      <p
                        className={`font-bold text-${
                          item.currentStock < item.minimumStock ? 'red' : 'emerald'
                        }-700`}
                      >
                        {item.currentStock} {item.unit}s
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded p-2">
                      <p className="text-xs text-slate-500 mb-1">Minimum Stock</p>
                      <p className="font-bold text-slate-900">
                        {item.minimumStock} {item.unit}s
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded p-2">
                      <p className="text-xs text-slate-500 mb-1">Location</p>
                      <p className="font-bold text-slate-900">{item.location}</p>
                    </div>
                  </div>

                  {/* Stock Level Bar */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-600">Stock Level</span>
                      <span className="text-xs font-semibold text-slate-900">{stockPercentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          stockPercentage < 50
                            ? 'bg-red-500'
                            : stockPercentage < 75
                            ? 'bg-amber-500'
                            : 'bg-emerald-500'
                        }`}
                        style={{ width: `${Math.min(stockPercentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600">
                    {item.batchNumber && (
                      <div>
                        <span className="text-slate-500">Batch:</span>{' '}
                        <span className="font-mono font-medium">{item.batchNumber}</span>
                      </div>
                    )}
                    {item.expiryDate && (
                      <div>
                        <span className="text-slate-500">Expires:</span>{' '}
                        <span
                          className={`font-medium ${expiringSoon ? 'text-amber-700 font-bold' : ''}`}
                        >
                          {new Date(item.expiryDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    <div>
                      <span className="text-slate-500">Cost/Unit:</span>{' '}
                      <span className="font-medium">${item.costPerUnit.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Total Value:</span>{' '}
                      <span className="font-medium">
                        ${(item.currentStock * item.costPerUnit).toFixed(2)}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500">Supplier:</span>{' '}
                      <span className="font-medium">{item.supplier}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Last Restocked:</span>{' '}
                      <span>{new Date(item.lastRestocked).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-3">
                    {(item.status === 'low-stock' || item.status === 'out-of-stock') && (
                      <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs font-medium hover:bg-blue-700">
                        Reorder Now
                      </button>
                    )}
                    <button className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded text-xs font-medium hover:bg-slate-200">
                      View History
                    </button>
                    <button className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded text-xs font-medium hover:bg-slate-200">
                      Adjust Stock
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Stock Movements */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Stock Movements</h2>
        <div className="space-y-2">
          {mockStockMovements.slice(0, 10).map((movement) => {
            const item = mockInventoryItems.find((i) => i.id === movement.itemId);
            const typeColor =
              movement.type === 'received'
                ? 'emerald'
                : movement.type === 'dispensed'
                ? 'blue'
                : movement.type === 'expired'
                ? 'red'
                : 'amber';

            return (
              <div key={movement.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div
                  className={`w-8 h-8 bg-${typeColor}-100 rounded flex items-center justify-center flex-shrink-0`}
                >
                  {movement.type === 'received' ? (
                    <TrendingUp className={`w-4 h-4 text-${typeColor}-600`} />
                  ) : (
                    <TrendingDown className={`w-4 h-4 text-${typeColor}-600`} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900">
                    {movement.type === 'received' ? '+' : '-'}
                    {movement.quantity} {item?.unit}
                    {movement.quantity !== 1 ? 's' : ''} - {item?.name}
                  </p>
                  <p className="text-xs text-slate-600">
                    {movement.performedBy} •{' '}
                    {new Date(movement.performedAt).toLocaleString()}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 bg-${typeColor}-100 text-${typeColor}-900 text-xs font-bold rounded`}
                >
                  {movement.type.toUpperCase()}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex gap-3">
          <Package className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              Complete Inventory Tracking & Control
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Every item in the hospital is tracked from receipt to usage. Batch numbers link supplies
              to specific patients, creating complete traceability. Automatic low-stock alerts prevent
              shortages, and expiry tracking reduces waste.
            </p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✓ Real-time stock levels</li>
              <li>✓ Automatic reorder alerts</li>
              <li>✓ Batch and expiry tracking</li>
              <li>✓ Complete audit trail</li>
              <li>✓ Integration with orders and billing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
