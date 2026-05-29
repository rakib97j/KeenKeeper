import React from 'react';

const loading = () => {
    return (
      <div>
        <div className="p-10 grid grid-cols-4 gap-6">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="p-5 bg-white rounded-xl shadow animate-pulse"
            >
              <div className="w-20  skeleton h-20 bg-gray-300 rounded-full mx-auto"></div>
              <div className="h-4 skeleton bg-gray-300 mt-4 rounded"></div>
              <div className="h-3 skeleton bg-gray-200 mt-2 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default loading;