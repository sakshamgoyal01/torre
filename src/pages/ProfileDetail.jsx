import React, { useEffect, useState } from 'react';
import { getGenome } from '../services/torreAPI';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const tabs = [
  { key: 'strengths', name: 'Strengths' },
  { key: 'skills', name: 'Skills' },
  { key: 'personality', name: 'Personality' }
];

export default function ProfileDetail({ entity, onBack }) {
  const [genome, setGenome] = useState(null);
  const [activeTab, setActiveTab] = useState('strengths');

  useEffect(() => {
    const user = entity.person?.username;
    if (user) {
      getGenome(user)
        .then(setGenome)
        .catch(console.error);
    }
  }, [entity]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <button onClick={onBack} className="mb-4 text-pink-600 dark:text-pink-400 font-semibold">
        ← Back to search
      </button>
      <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
        <img src={entity.basics.picture || 'https://via.placeholder.com/100'} alt="" className="w-24 h-24 rounded-full shadow-lg mr-6" />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{entity.basics.name}</h2>
          <p className="text-gray-600 dark:text-gray-300">{entity.basics.professionalHeadline}</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <nav className="flex gap-4 border-b border-gray-300 dark:border-gray-700 p-2">
          {tabs.map(t => (
            <button
              key={t.key}
              className={`px-4 py-2 rounded-lg focus:outline-none ${
                activeTab === t.key
                  ? 'bg-pink-500 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.name}
            </button>
          ))}
        </nav>
        <div className="p-6">
          {!genome ? (
            <p className="text-gray-600 dark:text-gray-400">Loading {activeTab}...</p>
          ) : activeTab === 'strengths' ? (
            <RadarChart outerRadius={90} width={350} height={300} data={genome.strengths.slice(0, 6)}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis domain={[0, 1]} />
              <Radar
                name="Strengths"
                dataKey="percentile"
                stroke="#db2777"
                fill="#f472b6"
                fillOpacity={0.6}
                animationDuration={1500}
              />
              <Legend />
            </RadarChart>
          ) : activeTab === 'skills' ? (
            <div className="space-y-4">
              {genome.skills.slice(0, 8).map(s => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-200">{s.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{Math.round(s.weight * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${s.weight * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200">
              {genome.personality.map(p => (
                <li key={p.name}>{p.name}: {Math.round(p.percentile * 100)}%</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
