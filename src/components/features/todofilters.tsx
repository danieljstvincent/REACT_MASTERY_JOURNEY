
import React from 'react';
import { FilterType, TodoStats } from '../../types/todo';

interface TodoFiltersProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  stats: TodoStats;
  onClearCompleted: () => void;
}

const TodoFilters: React.FC<TodoFiltersProps> = ({
  currentFilter,
  onFilterChange,
  stats,
  onClearCompleted,
}) => {
  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', padding: '16px', borderTop: '1px solid #dee2e6' }}>
      <div style={{ fontSize: '14px', color: '#6c757d' }}>
        {stats.active} {stats.active === 1 ? 'item' : 'items'} left
      </div>
      
      <div style={{ display: 'flex', gap: '8px' }}>
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            style={{
              padding: '6px 12px',
              backgroundColor: currentFilter === filter.key ? '#007bff' : 'transparent',
              color: currentFilter === filter.key ? 'white' : '#007bff',
              border: '1px solid #007bff',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      <button
        onClick={onClearCompleted}
        disabled={stats.completed === 0}
        style={{
          padding: '6px 12px',
          backgroundColor: 'transparent',
          color: '#dc3545',
          border: '1px solid #dc3545',
          borderRadius: '4px',
          cursor: stats.completed === 0 ? 'not-allowed' : 'pointer',
          fontSize: '14px',
          opacity: stats.completed === 0 ? 0.3 : 1,
        }}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoFilters;