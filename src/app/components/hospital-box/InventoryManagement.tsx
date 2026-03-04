import { useState } from 'react';
import { useHospitalStore } from './store';
import { Package, AlertTriangle, TrendingDown, Search, Plus } from 'lucide-react';

export function InventoryManagement() {
  const inventory = useHospitalStore((state) => state.inventory);
  const auditLogs = useHospitalStore((state) => state.auditLogs);
  const currentUser = useHospitalStore((state) => state.currentUser);
  const updateInventoryStock = useHospitalStore((state) => state.updateInventoryStock);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'medication' | 'supply'>('all');
  const [showAdjustForm, setShowAdjustForm] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [adjustForm, setAdjustForm] = useState({
    quantity: 0,
    reason: '',
  });

  const canEdit = currentUser?.permissions.editInventory;

  // Filter inventory
  const filteredInventory = inventory.filter((item) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Low stock items
  const lowStockItems = inventory.filter((item) => item.currentStock < item.minimumStock);

  // Recently adjusted items (from audit logs)
  const recentAdjustments = auditLogs
    .filter((log) => log.action === 'inventory-adjust')
    .slice(0, 10);

  const handleOpenAdjustForm = (itemId: string) => {
    setSelectedItemId(itemId);
    setShowAdjustForm(true);
    setAdjustForm({ quantity: 0, reason: '' });
  };

  const handleAdjustInventory = () => {
    if (!selectedItemId || !currentUser) return;
    
    if (adjustForm.quantity === 0) {
      alert('Please enter a quantity adjustment');
      return;
    }

    if (!adjustForm.reason.trim()) {
      alert('Please provide a reason for inventory adjustment');
      return;
    }

    updateInventoryStock(selectedItemId, adjustForm.quantity, adjustForm.reason);
    
    setShowAdjustForm(false);
    setSelectedItemId(null);
    alert('✓ Inventory adjusted successfully! Audit log created.');
  };

  const selectedItem = inventory.find((item) => item.id === selectedItemId);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Inventory Management</h2>
          <p className="text-sm text-slate-600 mt-1">
            Total Items: {inventory.length} | Low Stock Alerts: {lowStockItems.length}
          </p>
        </div>
      </div>

      {/* Low Stock Alert */}
      {lowStockItems.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-red-900 mb-2">Low Stock Warning</h3>
              <p className="text-sm text-red-800 mb-3">
                {lowStockItems.length} item(s) below minimum stock level:
              </p>
              <div className="space-y-1">
                {lowStockItems.map((item) => (
                  <div key={item.id} className="text-sm text-red-800">
                    • <strong>{item.name}</strong> - {item.currentStock} units (Min: {item.minimumStock})
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name or SKU..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value as typeof categoryFilter)}
          className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="medication">Medications</option>
          <option value="supply">Supplies</option>
        </select>
      </div>

      {/* Adjust Inventory Modal */}
      {showAdjustForm && selectedItemId && selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-xl w-full">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Adjust Inventory</h3>
            
            <div className="bg-slate-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">{selectedItem.name}</h4>
              <div className="text-sm text-slate-600 space-y-1">
                <div><strong>SKU:</strong> {selectedItem.sku}</div>
                <div><strong>Current Stock:</strong> {selectedItem.currentStock} units</div>
                <div><strong>Minimum Stock:</strong> {selectedItem.minimumStock} units</div>
                {selectedItem.isControlled && (
                  <div className="text-red-700 font-semibold">⚠️ Controlled Substance</div>
                )}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Quantity Adjustment (+ to add, - to remove)
                </label>
                <input
                  type="number"
                  value={adjustForm.quantity}
                  onChange={(e) => setAdjustForm({ ...adjustForm, quantity: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., +50 or -10"
                />
                <p className="text-xs text-slate-500 mt-1">
                  New stock will be: {selectedItem.currentStock + adjustForm.quantity} units
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Reason for Adjustment *
                </label>
                <textarea
                  value={adjustForm.reason}
                  onChange={(e) => setAdjustForm({ ...adjustForm, reason: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Received new shipment, expired stock removed, discrepancy correction..."
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> All inventory adjustments are logged in the audit trail with timestamp, 
                  user, quantity, and reason.
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowAdjustForm(false);
                  setSelectedItemId(null);
                }}
                className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAdjustInventory}
                disabled={adjustForm.quantity === 0 || !adjustForm.reason.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Adjust Inventory
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inventory Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredInventory.map((item) => {
          const isLowStock = item.currentStock < item.minimumStock;
          const stockPercentage = (item.currentStock / item.minimumStock) * 100;
          
          return (
            <div
              key={item.id}
              className={`border rounded-xl p-5 ${
                isLowStock ? 'bg-red-50 border-red-300' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-slate-900">{item.name}</h4>
                    {item.isControlled && (
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full">
                        CONTROLLED
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-slate-600 space-y-1">
                    <div><strong>SKU:</strong> {item.sku}</div>
                    <div><strong>Category:</strong> {item.category}</div>
                    <div><strong>Unit Cost:</strong> ${item.unitCost.toFixed(2)}</div>
                    {item.expiryDate && (
                      <div>
                        <strong>Expiry:</strong> {new Date(item.expiryDate).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Stock Level */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700">Stock Level</span>
                  <span className={`text-sm font-bold ${isLowStock ? 'text-red-700' : 'text-emerald-700'}`}>
                    {item.currentStock} / {item.minimumStock} units
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      stockPercentage >= 100 ? 'bg-emerald-500' :
                      stockPercentage >= 50 ? 'bg-amber-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${Math.min(stockPercentage, 100)}%` }}
                  />
                </div>
              </div>

              {isLowStock && (
                <div className="mb-3 p-2 bg-red-100 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2 text-xs text-red-800">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="font-semibold">Below minimum stock level!</span>
                  </div>
                </div>
              )}

              {canEdit && (
                <button
                  onClick={() => handleOpenAdjustForm(item.id)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Adjust Inventory
                </button>
              )}
            </div>
          );
        })}

        {filteredInventory.length === 0 && (
          <div className="col-span-2 text-center py-12 bg-white rounded-xl border border-slate-200">
            <Package className="w-12 h-12 mx-auto mb-3 text-slate-300" />
            <p className="text-slate-500">No items found</p>
          </div>
        )}
      </div>

      {/* Recent Adjustments */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <TrendingDown className="w-5 h-5 text-slate-600" />
          Recent Inventory Adjustments
        </h3>
        <div className="space-y-2">
          {recentAdjustments.map((log) => {
            const details = log.details as any;
            const item = inventory.find((i) => i.id === details?.itemId);
            
            return (
              <div key={log.id} className="flex items-start justify-between py-2 border-b border-slate-100 last:border-0">
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-900">
                    {item?.name || 'Unknown Item'}
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    {details?.reason}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {new Date(log.timestamp).toLocaleString()} by {log.userId}
                  </div>
                </div>
                <div className={`text-sm font-bold ${
                  (details?.quantityChange || 0) > 0 ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {(details?.quantityChange || 0) > 0 ? '+' : ''}{details?.quantityChange}
                </div>
              </div>
            );
          })}
          {recentAdjustments.length === 0 && (
            <div className="text-center py-4 text-slate-400 text-sm">
              No recent adjustments
            </div>
          )}
        </div>
      </div>
    </div>
  );
}