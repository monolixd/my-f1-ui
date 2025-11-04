import React from "react";

export const F1Card = ({ driver }) => {
  if (!driver) {
    return null;
  }

  // 2. "แกะกล่อง" props ออกมาใช้
  const { name, team, number, imageUrl, stats } = driver;

  // 3. Return UI 
  return (
    <div className="w-80 overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Header with number overlay */}
      <div className="relative">
        <div className="absolute top-4 right-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white/90 shadow-lg backdrop-blur-sm">
          <span className="text-2xl font-black text-gray-800">#{number}</span>
        </div>

        <img
          className="h-56 w-full object-cover"
          src={imageUrl}
          alt={`Portrait of ${name}`}
        />

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      <div className="p-6">
        {/* Team badge */}
        <div className="inline-block rounded-full bg-gradient-to-r from-teal-200 to-teal-300 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-900 shadow-sm">
          {team}
        </div>

        {/* Driver name */}
        <h4 className="mt-3 text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h4>

        {stats && (
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Wins
              </div>
              <div className="mt-1 text-2xl font-black text-gray-900">
                {stats.wins}
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Poles
              </div>
              <div className="mt-1 text-2xl font-black text-gray-900">
                {stats.poles}
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                WDCs
              </div>
              <div className="mt-1 text-2xl font-black text-gray-900">
                {stats.wdcs}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
